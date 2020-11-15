var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BBHpPB4nEoFvLqr9ffh1rluBBzC4u1tOuu4quWbeoNt4fLdXiLgwNuN0DqAs7LX-Xa6p3MolEhwRnWLOp6fp-X0",
    "privateKey": "XSQvIYLWQmZ4h4rL84CvOse0a6RTGMbTh9s1BGjKdcg"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
//data berubah2
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/caz2CzTJ-Zs:APA91bEqTnqm1v8Djz342X_g_t_h2LSw9A7vQThSKKbhgyFrJq48Ogo9lNZXYJZavaOQTyGVsajge9M5qDE7Mzijo66sVbkm24kD1LPEVIUBaLIPOlFNmrdewcRGN3D8D_1_PAlpUaFS",
    "keys": {
        "p256dh": "BMREr8cwMxhuvmKBsfCRZQ23Tvk6kUjqn0LU+gQObGq7JWvZ8EU0H7z6Efv06kR7B+//R0V/Qhl1qeXBvo9MPEk=",
        "auth": "C7vkIIifzmxevqMZgZlvFg=="
    }
};
//isi
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '863728007042',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);