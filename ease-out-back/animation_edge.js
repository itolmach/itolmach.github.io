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
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"worker_green.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Task_Delayed',
                            type: 'image',
                            rect: ['378px', '149', '32px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Task%20%28Delayed%29.svg",'0px','0px']
                        },
                        {
                            id: 'Task_DelayedCopy',
                            type: 'image',
                            rect: ['378px', '149', '32px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Task%20%28Delayed%29.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 11500,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "scaleY",
                            2723,
                            351,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "scaleY",
                            3500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            4500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            5500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            6500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            7500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            8500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            9500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid110",
                            "scaleY",
                            10500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
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
                            "eid87",
                            "scaleX",
                            2723,
                            351,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            3500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            4500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleX",
                            5500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            6500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleX",
                            7500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            8500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            9500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid114",
                            "scaleX",
                            10500,
                            1000,
                            "easeOutBack",
                            "${Task_DelayedCopy}",
                            '1.2',
                            '1'
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
                            "eid83",
                            "scaleX",
                            1806,
                            351,
                            "easeInBack",
                            "${worker_green}",
                            '1',
                            '0'
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
                            "eid67",
                            "scaleX",
                            1806,
                            351,
                            "easeInBack",
                            "${Task_Delayed}",
                            '1',
                            '0'
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
                            "eid85",
                            "scaleY",
                            1806,
                            351,
                            "easeInBack",
                            "${worker_green}",
                            '1',
                            '0'
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
                        ],
                        [
                            "eid68",
                            "scaleY",
                            1806,
                            351,
                            "easeInBack",
                            "${Task_Delayed}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation_edgeActions.js");
})("EDGE-840678496");
