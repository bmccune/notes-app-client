export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    apiGateway: {
        URL: "https://ehdvpor7sb.execute-api.us-west-2.amazonaws.com/prod",
        REGION: "us-west-2"
    },
    s3: {
        BUCKET: "notes-app-upload"
    },
    cognito: {
        REGION: "us-west-2",
        IDENTITY_POOL_ID: "us-west-2:25028239-2af4-402c-8123-564775e2f13a",
        USER_POOL_ID: "us-west-2_TjTlSY9uS",
        APP_CLIENT_ID: "5s7vtgtc8a16boq4bk5snd8jms"
    }
};