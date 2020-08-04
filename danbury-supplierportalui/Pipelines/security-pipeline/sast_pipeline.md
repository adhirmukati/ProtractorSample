
README for Veracode SAST CI Pipeline 
------------------------------------

Version: 0.5(POC)
Date: August 2019
Author: jeff.wirth@realogy.com

Support Note!
-------------
The current Veracode SAST CI Pipeline script supports languages that require
packaging source code into a 'compressed zip' file and uploaded to Veracode.

This includes, among others, .NET, JavaScript, Python, Go

Preping Your Code
-----------------
The Varacode SAST CI Pipeline script requires that all the testable portions
of the repository are archived as a compressed zipfile.

Follow the requirements from Veracode documented here: 
https://help.veracode.com/reader/4EKhlLSMHm5jC8P8j3XccQ/UXI5sR0ayWfLm6ifmd4zWw

Requirements for the pipeline script
------------------------------------
For an example see the sample "bitbucket-pipelines.yml" file

In the "script" portion of you pipline file (e.g., bitbucket-pipelines.yml)
we need to use 'agt-get' to get the required os tools>

include:
script: # Modify the commands below to build your repository.
apt-get update
apt-get -qq install zip

We aso need a couple of non-default Python modules (we also use some default
ones - 'os' and 'sys').

include:
pip install requests
pip install xmltodict
     
Create your repository archive and call the SAST CI Pipeline script as follows

include:
python sast_pipeline.py "full name of you repostitory zipfile"