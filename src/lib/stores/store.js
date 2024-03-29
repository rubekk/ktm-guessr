import { writable } from  "svelte/store";

export let canShowShare=writable(false);

export let canShowWhat=writable(false);

export let isGameCompleted=writable(false);

export let totalScore=writable(0);

export let totalGuessed=writable(0);

export let currentPlace=writable({});

export const data=writable([
    {
        name: "Lalitpur Metropolitan City",
        coords: [27.676212, 85.317288],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101010756!6m8!1m7!1sCAoSLEFGMVFpcE0zMjZ5cGhOZHRianNHUXB3MVpRbEtoNlM1bERmakU3aEZPbjhy!2m2!1d27.6761384!2d85.3172617!3f258.3248906657699!4f0!5f0.7820865974627469"
    },
    {
        name: "Chilancho",
        coords: [27.676931, 85.278050],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101166970!6m8!1m7!1sCAoSLEFGMVFpcFAxdjVKTmtDNjhOLVRuTWV3N3J1X1l6OWxIa3FhTXY0ZjJQSF9X!2m2!1d27.6769406!2d85.2781408!3f101.60318781110252!4f-8.00313069916119!5f0.7820865974627469"
    },
    {
        name: "Shantaneshwor Mahadev",
        coords: [27.615461, 85.344263],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101253935!6m8!1m7!1sCAoSLEFGMVFpcE40MnduMmFzZGIwT2NZYUtmNF9OWG5PWHlBZnpoQWoxUzV4LWNG!2m2!1d27.6154188!2d85.3442127!3f65.98842521944646!4f3.118903058790025!5f0.7820865974627469"
    },
    {
        name: "Lagankhel",
        coords: [27.6669333,85.3226411],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101380124!6m8!1m7!1sCAoSLEFGMVFpcE5sMGtaZ3QyaHdudG42N1J6OEV1MHkzWnpoTUt3cjlQbkF6SWpp!2m2!1d27.6669333!2d85.32264110000001!3f10.034015969202205!4f-6.059134748819602!5f0.7820865974627469"
    },
    {
        name: "Dasarath Rangashala",
        coords: [27.695077,85.314829],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101568510!6m8!1m7!1sCAoSLEFGMVFpcE1hd0JHUXFvVXROMXlpN2tqXzNoTkpaWDRBb2xkSS1fLWFxXzg3!2m2!1d27.695077!2d85.314829!3f206.3015329385111!4f-10.19912790635155!5f0.7820865974627469"
    },
    {
        name: "Shankhadar park",
        coords: [27.706157,85.3150758],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101652077!6m8!1m7!1sCAoSLEFGMVFpcE9qYXpNem5yWHB1eEd6amx3Y18xdWk1YzVFNzB0ZUNVSFNaMXhj!2m2!1d27.706157!2d85.3150758!3f319.43733367499874!4f-14.38157553654267!5f0.4000000000000002"
    },
    {
        name: "Nagdaha",
        coords: [27.6251774,85.3336716],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101783713!6m8!1m7!1sCAoSLEFGMVFpcE8yQjdROEloR3RDV2FsWEtvY0FVbTRScjVYNGZVS21nMjJLUUpF!2m2!1d27.6251774!2d85.3336716!3f94.142740805711!4f-5.437367656144062!5f0.7820865974627469"
    },
    {
        name: "Mangalbazaar",
        coords: [27.6735983,85.3249312],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101873390!6m8!1m7!1sCAoSLEFGMVFpcFBQOGprV1VEWnE5YUxSYXVVOTV0bW9vYXFoV0ZwS2Y3VXNHRGkz!2m2!1d27.6735983!2d85.3249312!3f194.77315760815148!4f-9.560807655626249!5f0.7820865974627469"
    },
    {
        name: "Basantapur",
        coords: [27.7045263,85.3070764],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682101958042!6m8!1m7!1sCAoSLEFGMVFpcE5WckRPUkVPaVJreHZaVDVoMlpuTGMwcU9TYnJMajNZSVhWb08x!2m2!1d27.7045263!2d85.3070764!3f114.3122734194631!4f-9.530128142052305!5f0.7820865974627469"
    },
    {
        name: "Swayambhu",
        coords: [27.7148757,85.2906001],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682102072990!6m8!1m7!1sCAoSLEFGMVFpcE54TEZHbWpHNmJHbGg0VWs4Tm1Xd0ZKdXR2VG5ydGRZbzc1UWxK!2m2!1d27.7148757!2d85.29060009999999!3f135.9059367888131!4f-27.539160824543323!5f0.7820865974627469"
    },
    {
        name: "Pashupatinath",
        coords: [27.7104461,85.3486915],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682140394122!6m8!1m7!1sCAoSLEFGMVFpcE5Ra3doUkd2dDRIZUl5RjhpM0xRUV93eEtRcFY0Z2hyZllUWFJs!2m2!1d27.7104461!2d85.3486915!3f175.73742697219822!4f17.99136277788186!5f0.7820865974627469"
    },
    {
        name: "Godawari",
        coords: [27.5957909,85.3810806],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682140477463!6m8!1m7!1sCAoSLEFGMVFpcE15UkFXMmNuLUx4Z1FMeXA1S21BUzk2N0RqMlB5bHc4UlNOVFBR!2m2!1d27.59579089361477!2d85.38108056722082!3f305.68530720339544!4f4.282136859211889!5f0.7820865974627469"
    },
    {
        name: "Tribhuvan University",
        coords: [27.6807033,85.283935],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682140685480!6m8!1m7!1sCAoSLEFGMVFpcE1rNTlwNDQ0Tjhsak8zNnROOEd0UDhydE5LdkZ6SEh1NVhEYmgx!2m2!1d27.6807033!2d85.283935!3f177.482839454031!4f-6.443935697363429!5f0.7820865974627469"
    },
    {
        name: "Ranipokhari",
        coords: [27.7078577,85.3152883],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682140740293!6m8!1m7!1sCAoSLEFGMVFpcE90YW4zR1BtdFJaWVVsTzd5THRxOUZ5UkNCT212TjJoWTItUkNj!2m2!1d27.7078577!2d85.31528829999999!3f231.05774744702202!4f-3.470662147248234!5f0.7820865974627469"
    },
    {
        name: "Singha Durbar",
        coords: [27.6980136,85.3238935],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682140845081!6m8!1m7!1sCAoSLEFGMVFpcE5xSjdPcVBVdzJsT21VaE9VM2YtdEFpYmV3c0p3aVBFRHFZdXQz!2m2!1d27.6980136!2d85.3238935!3f135.9023452436176!4f-15.34034430289212!5f0.7820865974627469"
    },
    {
        name: "Durbar marg",
        coords: [27.7118988,85.3176346],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682140932977!6m8!1m7!1sCAoSLEFGMVFpcE9pdVM5S29qb0U4UmV0bVMyenBJX0p6dlA4S3R0eDNBbGpsV3VT!2m2!1d27.7118988!2d85.31763459999999!3f20!4f10!5f0.7820865974627469"
    },
    {
        name: "Tribhuvan International Airport",
        coords: [27.6980899,85.3592231],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141026809!6m8!1m7!1sCAoSK0FGMVFpcE53V3ZzOXdsUjJzaWhROElFWDNpRFRTS2x5SGdoMmxfcTZ1TnM.!2m2!1d27.6980899!2d85.3592231!3f301.53361257345057!4f-14.682968196359113!5f0.7820865974627469"
    },
    {
        name: "Shivapuri",
        coords: [27.8129232,85.385934],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141120442!6m8!1m7!1sCAoSLEFGMVFpcE5KSm93V3V0VzBYN1ZnSjIyUXZnODRuWUlwUlc5RW5yZnpOV1Jo!2m2!1d27.8129232!2d85.38593399999999!3f248.93514965389545!4f3.275970193187945!5f0.7820865974627469"
    },
    {
        name: "Central Zoo",
        coords: [27.672704,85.3118294],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1684169674421!6m8!1m7!1sCAoSLEFGMVFpcE1JS3BpSlpUcFYySHlCR1VSQm1SazVTRlhSWVJFN1hlYW13cW1V!2m2!1d27.672704!2d85.3118294!3f340!4f0!5f0.7820865974627469"
    },
    {
        name: "Phulchowki",
        coords: [27.5711026,85.4055504],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141209868!6m8!1m7!1sCAoSLEFGMVFpcE5pc1BmLXBEalVIX3gyQWw5TTl6RERHSWxqbmNyQm8xYjRJdFNz!2m2!1d27.5711026!2d85.4055504!3f191.7795606787038!4f-21.099066628764362!5f0.7820865974627469"
    },
    {
        name: "Gwarko",
        coords: [27.666650, 85.331877],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141325578!6m8!1m7!1sCAoSLEFGMVFpcFAwLXJiU2JNdWE0VEZyb2xadWNxTG1zUEY3U1dCUk1TenFQZEUt!2m2!1d27.6576672!2d85.3271027!3f233.32432399399073!4f-7.184714875872686!5f0.7820865974627469"
    },
    {
        name: "Budhanilkantha",
        coords: [27.7771633,85.3624167],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141422687!6m8!1m7!1sCAoSLEFGMVFpcE5UcTRtN21Mc3pnLWp2a0VDTmZfbktadklycXZWa08zV2lKZXJM!2m2!1d27.7771633!2d85.36241670000001!3f261.24736055164067!4f7.0863342035729175!5f0.7820865974627469"
    },
    {
        name: "Jhor waterfall",
        coords: [27.8009659,85.3216558],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141502531!6m8!1m7!1sCAoSLEFGMVFpcE0wMjk5T0pyY0pkbFpUdVJ1djd2MXJxN0hKaHpqdmtVVVZSVzJL!2m2!1d27.8009659!2d85.3216558!3f168.51877293918636!4f13.620984005781068!5f0.7820865974627469"
    },
    {
        name: "Baneshwor",
        coords: [27.68883,85.335615],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141557761!6m8!1m7!1sCAoSLEFGMVFpcFBFSVhTeWxqcHNjNmVsYVU1ZWFuSXhYWjFCaUZHSXU1aTJnT05F!2m2!1d27.68882996838843!2d85.3356149988097!3f62.38348419041175!4f1.0119177740475322!5f0.7820865974627469"
    },
    {
        name: "Patan Dhoka",
        coords: [27.6791202,85.321376],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1682141611870!6m8!1m7!1sCAoSLEFGMVFpcE5oaHYxSlVTbWRtVWtFRm1TejdkZ3h3dzM3Z0JRaE9zbS16RFBw!2m2!1d27.6791202!2d85.321376!3f282.81470208683953!4f5.708622387032847!5f0.7820865974627469"
    },
    {
        name: "Balkumari Temple",
        coords: [27.671892,85.335854],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1684167796397!6m8!1m7!1sCAoSLEFGMVFpcE9MbVV5dUJaSlJsYVdFTlhJSWFLeTlHaTI1OGhFUEtWM1BGVzZR!2m2!1d27.67189240127032!2d85.3358544409275!3f51.82929967320853!4f2.207774751288156!5f0.4000000000000002"
    },
    {
        name: "Shree Bangalamukhi Temple",
        coords: [27.6764742,85.3259913],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1684169930175!6m8!1m7!1sCAoSLEFGMVFpcE9EaVdkNGZoREdvZW5WNWJnVUFnN09pVDVjamtyX3ZLS1JaZGJq!2m2!1d27.6764742!2d85.3259913!3f310.88665933870425!4f10.546117994474457!5f0.7820865974627469"
    },
    {
        name: "Lankuri Bhanjyang",
        coords: [27.6120011,85.4097986],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1684170021941!6m8!1m7!1sCAoSLEFGMVFpcE83MG5aTzl2SEtQUXR4X29qYmFmcFAzN2xXNlBsSDB2eGJpWnlt!2m2!1d27.6120011!2d85.4097986!3f47.99522846339113!4f9.462417941048358!5f0.7820865974627469"
    },
    {
        name: "Labim Mall",
        coords: [27.6771618, 85.3169550],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1684170105183!6m8!1m7!1sCAoSLEFGMVFpcE5rODh5Z29uVnBQNWZKdGN6cWRYZHhEdEQzdjdBQ0JOWXBNanFJ!2m2!1d27.653085!2d85.3248217!3f120!4f0!5f0.7820865974627469"
    },
    {
        name: "Pimbahal",
        coords: [27.676057,85.320881],
        iframeURL: "https://www.google.com/maps/embed?pb=!4v1684170143442!6m8!1m7!1sCAoSLEFGMVFpcFBtZEdsdVZXcW8yajJLUGFTRGQ1YWF1azdOWjUzNHd1aC1DT0F5!2m2!1d27.6760573!2d85.32088159999999!3f80!4f20!5f0.7820865974627469"
    }
]);

export let currIframeURL=writable("");
