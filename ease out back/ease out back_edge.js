/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'worker_green',
                            type: 'image',
                            rect: ['323', '284', '15px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"worker_green.svg",'0px','0px']
                        },
                        {
                            id: 'Task_Delayed',
                            type: 'image',
                            rect: ['378px', '149', '32px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Task%20%28Delayed%29.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 916.73828125,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            566,
                            351,
                            "easeOutBack",
                            "${worker_green}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            566,
                            351,
                            "easeOutBack",
                            "${Task_Delayed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            566,
                            351,
                            "easeOutBack",
                            "${worker_green}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            566,
                            351,
                            "easeOutBack",
                            "${Task_Delayed}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ease%20out%20back_edgeActions.js");
})("EDGE-840678496");
