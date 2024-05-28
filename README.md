Task 3: Personal Portfolio Website 

Build your personal portfolio website and host in on cloud AWS or a 
comparable cloud.



![Untitled Diagram drawio - draw io - Google Chrome 28-05-2024 22_51_56](https://github.com/Yash03032002/MyProjects/assets/151602561/b6ede7c6-3896-4a35-bf5d-ae886993418a)

Steps to host a Personal Portfolio Website on AWS:
1. Create GitHub repository.
2. Clone repository in your local system and push all the required files and folder to that repository.
3. For automation go to GitHub action and go to set up your own workflow.
4. To set up workflow write a main.yml file as mentioned in project and start commit. It will create your automation like a workflow.
5. In AWS Management Console create a IAM user and create a IAM credentials i.e. Access Key and Secret Access key. 
6. Save login credentials in GitHub. i.e. Save Access Key and Secret Access Key in GitHub in Setting/Secrets and variables/Actions, In New Repository Secret.
7. Create a S3 bucket and enable the public access to S3 bucket.
8. Pull all the files in your local system and do some changes in index.html file.
9. Save the changes, add the changes, commit the changes, and push the changes to repository.
10. As the automation workflow it will copy all the files from GitHub to S3 bucket.
11. In S3 bucket go to permissions and create a bucket policy "PublicReadGetObject" for S3 bucket.
12. In S3 bucket go to properties and go to Static Website Hosting and enable it and upload the index.html file and save the changes.
13. Click the link on Static Website Hosting it will open Portfolio Website.

Personal Portfolio Website URL: http://yashdekate-portfolio.s3-website-us-east-1.amazonaws.com

