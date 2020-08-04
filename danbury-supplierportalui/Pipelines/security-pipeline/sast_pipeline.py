#------------------------------------------------------------------#
# Veracode SAST CI Pipeline                                        #
#------------------------------------------------------------------#
# Version: 0.7(POC)
# Date: August 2019
# Author: jeff.wirth@realogy.com
# 
# Purpose: 
# From within a Bitbucket Pipeline, automate calls to Veracode API for the pupose
# of uploading a Bitbucket code repo archive (zip) and initiate a default policy
# scan.   
# 
# Requirements:
# * For use with v5.0 of Veracode API (uploadfile.do and beginprescan.do) only
# * For use with Bitbucket Docker Pipelines only
#
# Current Features:
# * Veracode/Test Mode (Default): On script failure a 'non-zero' exit status is issued for Veracode errors (authn/z, api)
# * CI Pipeline mode (-ci, --full_ci option): On script failure a 'zero' exit status is issued on errors allowing for pipeline to continue
# * 3 general stages: 1) Prep 2) Upload zip archive of repo 3) Start scann of upload archive
#
# Help:
# usage: local_sast_pipeline.py [-h] -f FILE [-ci]
# required arguments:
#  -f FILE, --file FILE  Name of the code repo archive file in compressed zip
#                        format
# optional arguments:
#  -ci, --full_ci        Use this option to allow automated pipelines to
#                        continue on Veracode error
#
# Future Improvements:
# * Use on Azure DevOps pipeline
# * Use on GitLab pipelines
# * Move local funictions to seperate file and import
# * Provide a full debug mode (full message output)
# * Use python zipfile module to validate https://docs.python.org/3/library/zipfile.html
# * Use argparse to validation user input (file name) - COMPLETE v0.6
#------------------------------------------------------------------#

#------------------------------------------------------------------#
# Local Functions                                                  #
#------------------------------------------------------------------#

def veracode_stage_update(stage, message):
    #------------------------------------------------------------------#
    # Purpose:
    # Report current run stage and status
    #------------------------------------------------------------------#
        print("Veracode [{}]: {}".format(stage, message))
    
def veracode_report_error(code):
    #------------------------------------------------------------------#
    # Purpose:
    # Report # 1) API connect issue 2) General API error
    #------------------------------------------------------------------#
    
        if code in (400, 401, 403, 404, 405, 409, 500, 503):
            
            print("Veracode [API ERROR]: Reponse code - {}".format(code))
            
        else:
            
            print("Veracode [ERROR]: {}".format(code))   
    
def veracode_upload_parse(output):
    #------------------------------------------------------------------#
    # Purpose:
    # Parse and report upload XML/Dict output
    #------------------------------------------------------------------#
    return "(uploadfile.do) Build ID: {} Account ID: {} Application ID: {} Sandbox ID: {}".\
        format(output["filelist"]["@build_id"], output["filelist"]["@account_id"],\
        output["filelist"]["@app_id"], output["filelist"]["@sandbox_id"])
    
def veracode_scan_parse(output):
    #------------------------------------------------------------------#
    # Purpose:
    # Parse and report scan XML/Dict output
    #------------------------------------------------------------------#
    return "(beginprescan.do) Build ID: {} Account ID: {} Application ID: {} Sandbox ID: {}".\
        format(output["buildinfo"]["@build_id"], output["buildinfo"]["@account_id"],\
        output["buildinfo"]["@app_id"], output["buildinfo"]["@sandbox_id"])
    
    #------------------------------------------------------------------#
    # Import Required Modules                                          #
    #------------------------------------------------------------------#
    #- Set current execution stage
my_stage = "PREP"
try: 
#--- Report to pipleline where we are  
    veracode_stage_update(my_stage, "Validating import of required modules (os, sys, requests, xmltodict)")
#--- Need "OS" to get pipeline (docker) defined variables    
    import os
#--- Need "SYS" to take some user imput and control our exit state so the pipeline/engineer clearly understands (0 = OK, 1 = Error occured)    
    import sys
#--- Simplify argument parsing    
    import argparse
#--- Use "REQUESTS" to GREATLY simplify and manage API calls (DON'T USE CURL or the like!)
    import requests
#--- Use "XMLTODICT" to make quick work of reading XML responses from Veracode
    import xmltodict

except:
#--- 
    veracode_report_error("Stopped execution due to exception during import validation")
    raise 

#------------------------------------------------------------------#
# Get user supplied arguements                                     #
#------------------------------------------------------------------#
parser = argparse.ArgumentParser()
parser._action_groups.pop()
required = parser.add_argument_group('required arguments')
optional = parser.add_argument_group('optional arguments')
required.add_argument('-f', '--file', type=str, required=True, help='Name of the code repo archive file in compressed zip format')
optional.add_argument('-ci','--full_ci', action='store_true', help='Use this option to allow automated pipelines to continue on Veracode error')  
args = parser.parse_args()
#- Local repo archive file
repo_zip = args.file
#- Run mode - On 'true' CI Pipeline mode
full_ci = args.full_ci
#- Report to the pipeline what mode we are in
if full_ci:
    veracode_stage_update(my_stage, "Running in full CI pipeline mode")
else: 
    veracode_stage_update(my_stage, "Running in Veracode only mode")
#------------------------------------------------------------------#
# Validate Repo Archive                                            #
#------------------------------------------------------------------#
try:
#--- Report to pipleline where we are
    veracode_stage_update(my_stage, "Validating local repo archive")
    upload_files = {'file' : open(repo_zip, 'rb')} 
    veracode_stage_update(my_stage,"Archive - {}".format(upload_files))
except:
#--- No file found!
    veracode_report_error("Stopped execution due to exception during archive file valiation")
    raise

#------------------------------------------------------------------#
# Import pipline variables                                         #
#------------------------------------------------------------------#
try:
    veracode_stage_update(my_stage, "Importing OS variables for use locally")
    user = os.environ.get('VERACODE_USER')
    if not user:
        veracode_report_error("VERACODE_USER is not set in pipeline")
        sys.exit(1)
    secret = os.environ.get('VERACODE_PASS')
    if not secret:
        veracode_report_error("VERACODE_PASS is not set in pipeline")
        sys.exit(1)
    application_id = os.environ.get('VERACODE_APPID')
    if not application_id:
        veracode_report_error("VERACODE_APPID is not set in pipeline")
        sys.exit(1)
    sandbox_id = os.environ.get('VERACODE_SAND')
    if not sandbox_id:
        veracode_report_error("VERACODE_SAND is not set in pipeline")
        sys.exit(1)
except:
#--- Pipeline variables not setup properly  
    veracode_report_error("Stopped execution due to exception during pipeline variable import")
    raise    

#------------------------------------------------------------------#
# Set Veracode API variables                                       #
#------------------------------------------------------------------#
upload_api = "https://analysiscenter.veracode.com/api/5.0/uploadfile.do"
upload_api_params = {'app_id':application_id, 'sandbox_id':sandbox_id}
scan_api = "https://analysiscenter.veracode.com/api/5.0/beginprescan.do"
scan_api_params = {'app_id':application_id, 'sandbox_id':sandbox_id, 'auto_scan':True}

#------------------------------------------------------------------#
# Upload Stage                                                     #
#------------------------------------------------------------------#
my_stage = "UPLOAD"
try: 
#--- Report status to pipeline
    veracode_stage_update(my_stage, "Connecting to Veracode API for repo archive upload")
#--- Call Veracode UPLOAD API
    api_call = requests.post(upload_api, params=upload_api_params, files=upload_files, auth=(user, secret))   

#--- Verify connection to API
    if api_call.status_code != 200:
#--- Report error to pipeline        
        veracode_report_error(api_call.status_code)
        if full_ci:
            veracode_report_error("Existing Veracode tasks due to API connection error.  CI Pipeline will continue.")
            sys.exit(0)
        else:
            veracode_report_error("Halting pipeline due to API connection error")
            sys.exit(1)
    else:     
#------ Report that the API connection went well
        veracode_stage_update(my_stage,api_call)
#------ Quick XML to Dict coversation for an easy parse
        response = xmltodict.parse(api_call.text)
#------ if Veracode reponse includes an "error" key something went wrong, report error and stop execution
        if 'error' in response:
            if full_ci:
                veracode_report_error(response['error'])
                veracode_stage_update(my_stage, "Exiting Veracode tasks due to error.  CI Pipeline will continue.")
                sys.exit(0)
            else:
                veracode_report_error(response['error'])
                veracode_stage_update(my_stage, "Halting pipeline due to error")
                sys.exit(1)
        else:
#------ Upload completed present reponse is meaningful way and update pipeline
            veracode_stage_update(my_stage, veracode_upload_parse(response))
            veracode_stage_update(my_stage, "Upload complete")
except:
    veracode_stage_update(my_stage, "Stopped execution due to exception during upload process")
    raise

#------------------------------------------------------------------#
# Scan Phase                                                       #
#------------------------------------------------------------------#
my_stage = "SCAN"
try:
#--- Report status to pipeline    
    veracode_stage_update(my_stage, "Connecting to Veracode API to start scan")
#--- Call Veracode PRESCAN API
    r = requests.post(scan_api, params=scan_api_params, auth=(user, secret))
#--- Verify connection to API
    if r.status_code != 200:
#--- Report error to pipeline        
        veracode_report_error(r.status_code)
        if full_ci:
            veracode_report_error("Existing Veracode tasks due to API connection error.  CI Pipeline will continue.")
            sys.exit(0)
        else:
            veracode_report_error("Halting pipeline due to API connection error")
            sys.exit(1)
    else:     
#------ Report that the API connection went well
        veracode_stage_update(my_stage,r)
#------ Quick XML to Dict coversation for an easy parse
        response = xmltodict.parse(r.text)
#------ if Veracode reponse includes an "error" key something went wrong, report error and stop execution
        if 'error' in response:
            if full_ci:
                veracode_report_error(response['error'])
                veracode_stage_update(my_stage, "Exiting Veracode tasks due to error.  CI Pipeline will continue.")
                sys.exit(0)
            else:
                veracode_report_error(response['error'])
                veracode_stage_update(my_stage, "Halting pipeline due to error")
                sys.exit(1)
        else:
#------ Scan request completed present reponse update the pipeline 
            veracode_stage_update(my_stage, veracode_scan_parse(response))
            veracode_stage_update(my_stage, "Scan initiation complete")
except: 
    veracode_stage_update(my_stage, "Stopped execution due to exception during init scan process")
    raise

sys.exit(0)