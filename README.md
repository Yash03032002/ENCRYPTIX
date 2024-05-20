Task 1: Build a serverless web app on cloud using service like Lambda, API 
Gateway, and DynamoDB for dynamic functionality. Use AWS Amplify or 
SAM for deployment automation.


![Untitled Diagram drawio - draw io - Google Chrome 21-05-2024 01_00_35](https://github.com/Yash03032002/wildrides-site/assets/151602561/19949ef6-21c2-4d5a-9a66-f488f668639f)

In this task, you will create a serverless web application that enables users to request unicorn rides from the Wild Rydes fleet. The application will present users with an HTML-based user interface for indicating a pick-up location and a RESTful web service on the backend to submit the request for dispatching a unicorn. The application will also provide facilities for users to register with the service and log in before requesting rides.

Steps to build a serverless web app using AWS:

1. Create a Git repository and push all the required files and folders to that repository.
2. Launch the AWS Amplify console. Under the Amplify Hosting Host your web app header, choose Get Started. On the Get started with Amplify Hosting page, select GitHub and choose Continue.
3. Create a Amazon Cognito user pool and integrate an app with your user pool. In the Amazon Cognito console, choose Create user pool. On the Configure sign-in experience page, in the Cognito user pool sign-in options section, select User name. Keep the defaults for the other settings, such as Provider types and do not make any User name requirements selections. Choose Next.
4. On the Configure security requirements page, keep the Password policy mode as Cognito defaults. You can choose to configure multi-factor authentication (MFA) or choose No MFA and keep other configurations as default. Choose Next.
5. On the Configure message delivery page, for Email provider, confirm that Send email with Amazon SES - Recommended is selected. In the FROM email address field, select an email address that you have verified with Amazon SES, following the instructions in Verifying an email address identity in the Amazon Simple Email Service Developer Guide.   
Note: If you don't see the verified email address populating in the dropdown, ensure that you have created a verified email address in the same Region you selected at the beginning of the tutorial.
6.
