import json
import base64
import datetime
import boto3

def lambda_handler(event, context):
    # TODO implement
    img_data = event["image64"]
    img_data = bytes(img_data, 'utf-8')

    s3 = boto3.resource('s3')
    bucket_name = 'jhamroo-bucket'
    bucket = s3.Bucket(bucket_name)


    now = datetime.datetime.now()
    extension = str(now.month)+'_'+str(now.day)+'_'+str(now.year) + \
        '_'+str(now.hour)+'_'+str(now.minute)+'_'+str(now.second)

    
    with open('/tmp/image.png', 'wb') as image:
        image.write(base64.decodebytes(img_data))
        bucket.upload_file(
            '/tmp/image.png', 'testFolder/image_'+str(extension)+'.png')
            
    object_acl = s3.ObjectAcl(bucket_name, 'testFolder/image_'+str(extension)+'.png')
    response = object_acl.put(ACL='public-read')
    
    if (response['ResponseMetadata']['HTTPStatusCode'] == 200):
        object_url = "https://s3.amazonaws.com/{}/{}".format(
        bucket_name,
        'testFolder/image_'+str(extension)+'.png')
        return ({"imageurl":str(object_url)})
            
    return ({"result": "Error Occured"})
    

