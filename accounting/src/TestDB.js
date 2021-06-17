import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';

export default class TestDb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modulsId: {

                /*
                    dateTime: [
                        'Дата',
                        'День недели',
                        'Время начала',
                        'Время окончания',
                    ],
                    lessonInfo: [
                        'ФИО преподавателя',
                        'Тема занятия',
                    ],
                    place: [
                        'Здание/корпус',
                        'Помещения/кабинет',
                    ],
                    homeTaskInfo: [
                        'Крайний срок сдачи',
                        'Задание',
                    ]
                */

                en1: {
                    stufInfo: [
                        'yelow',
                        'English'
                    ],
                    lessonsId: {
                        en11705210: {
                            dateTime: [
                                '17-05-21',
                                'Pn',
                                '10-15',
                                '11-45'
                            ],
                            lessonInfo: [
                                'Konenko Kseniya Aleksandrovna',
                                'Grammatika postroyeniya predlogeniy'
                            ],
                            place: [
                                8,
                                624
                            ],
                            homeTaskInfo: [
                                '19-05-21',
                                'Perevesti statyu'
                            ]
                        },
                        en11905210: {
                            dateTime: [
                                '19-05-21',
                                'Sr',
                                '10-15',
                                '11-45'
                            ],
                            lessonInfo: [
                                'Konenko Kseniya Aleksandrovna',
                                'Grammatika postroyeniya predlogeniy'
                            ],
                            place: [
                                8,
                                624
                            ],
                            homeTaskInfo: []
                        },
                        en12105210: {
                            dateTime: [
                                '21-05-21',
                                'Pt',
                                '10-15',
                                '11-45'
                            ],
                            lessonInfo: [
                                'Konenko Kseniya Aleksandrovna',
                                'Grammatika postroyeniya predlogeniy'
                            ],
                            place: [
                                8,
                                624
                            ],
                            homeTaskInfo: []
                        },
                        en12405210: {
                            dateTime: [
                                '24-05-21',
                                'Pn',
                                '10-15',
                                '11-45'
                            ],
                            lessonInfo: [
                                'Konenko Kseniya Aleksandrovna',
                                'Grammatika postroyeniya predlogeniy'
                            ],
                            place: [
                                8,
                                624
                            ],
                            homeTaskInfo: []
                        },
                        en12605210: {
                            dateTime: [
                                '26-05-21',
                                'Sr',
                                '10-15',
                                '11-45'
                            ],
                            lessonInfo: [
                                'Konenko Kseniya Aleksandrovna',
                                'Grammatika postroyeniya predlogeniy'
                            ],
                            place: [
                                8,
                                624
                            ],
                            homeTaskInfo: []
                        },
                    }
                },
                ph1: {
                    stufInfo: [
                        'purpure',
                        'Phisics'
                    ],
                    lessonsId: {
                        ph11805210: {
                            dateTime: [
                                '18-05-21',
                                'Vt',
                                '12-00',
                                '13-30'
                            ],
                            lessonInfo: [
                                'Yershov Igor Vladimirovich',
                                'Relyativistskaya mehanika'
                            ],
                            place: [
                                8,
                                623
                            ],
                            homeTaskInfo: [
                                '25-05-21',
                                'Zasachi №1, 4, 7'
                            ]
                        },
                        ph11805211: {
                            dateTime: [
                                '18-05-21',
                                'Vt',
                                '14-15',
                                '15-45'
                            ],
                            lessonInfo: [
                                'Yershov Igor Vladimirovich',
                                'Relyativistskaya mehanika'
                            ],
                            place: [
                                8,
                                623
                            ],
                            homeTaskInfo: []
                        },
                        ph12505210: {
                            dateTime: [
                                '25-05-21',
                                'Vt',
                                '12-00',
                                '13-30'
                            ],
                            lessonInfo: [
                                'Yershov Igor Vladimirovich',
                                'Experiment Shredingera'
                            ],
                            place: [
                                8,
                                623
                            ],
                            homeTaskInfo: []
                        },
                        ph12505211: {
                            dateTime: [
                                '25-05-21',
                                'Vt',
                                '14-15',
                                '15-45'
                            ],
                            lessonInfo: [
                                'Yershov Igor Vladimirovich',
                                'Experiment Shredingera'
                            ],
                            place: [
                                8,
                                623
                            ],
                            homeTaskInfo: []
                        },
                    }
                },
                sp1: {
                    stufInfo: [
                        'blue',
                        'Sport'
                    ],
                    lessonsId: {
                        sp11705210: {
                            dateTime: [
                                '17-05-21',
                                'Pn',
                                '08-30',
                                '10-00'
                            ],
                            lessonInfo: [
                                'Mineyev Alexey Vitalyevich',
                                'Running'
                            ],
                            place: [
                                'Manege',
                                'Zal'
                            ],
                            homeTaskInfo: []
                        },
                        sp11905210: {
                            dateTime: [
                                '19-05-21',
                                'Pn',
                                '08-30',
                                '10-00'
                            ],
                            lessonInfo: [
                                'Mineyev Alexey Vitalyevich',
                                'Running'
                            ],
                            place: [
                                'Manege',
                                'Zal'
                            ],
                            homeTaskInfo: []
                        },
                        sp12105210: {
                            dateTime: [
                                '21-05-21',
                                'Pt',
                                '08-30',
                                '10-00'
                            ],
                            lessonInfo: [
                                'Mineyev Alexey Vitalyevich',
                                'Running'
                            ],
                            place: [
                                'Manege',
                                'Zal'
                            ],
                            homeTaskInfo: []
                        },
                        sp12205210: {
                            dateTime: [
                                '22-05-21',
                                'Sb',
                                '08-30',
                                '10-00'
                            ],
                            lessonInfo: [
                                'Mineyev Alexey Vitalyevich',
                                'Running'
                            ],
                            place: [
                                'Manege',
                                'Zal'
                            ],
                            homeTaskInfo: []
                        },
                        sp12405210: {
                            dateTime: [
                                '24-05-21',
                                'Pn',
                                '08-30',
                                '10-00'
                            ],
                            lessonInfo: [
                                'Mineyev Alexey Vitalyevich',
                                'Running'
                            ],
                            place: [
                                'Manege',
                                'Zal'
                            ],
                            homeTaskInfo: []
                        },
                        sp12605210: {
                            dateTime: [
                                '26-05-21',
                                'Sr',
                                '08-30',
                                '10-00'
                            ],
                            lessonInfo: [
                                'Mineyev Alexey Vitalyevich',
                                'Running'
                            ],
                            place: [
                                'Manege',
                                'Zal'
                            ],
                            homeTaskInfo: []
                        },
                    }
                },
                mt1: {
                    stufInfo: [
                        ['red'],
                        ['Match']
                    ],
                    lessonsId: {
                        mt12205210: {
                            dateTime: [
                                '22-05-21',
                                'Sb',
                                '10-15',
                                '11-45',
                            ],
                            lessonInfo: [
                                'Vorovich Yelena Alexandrovna',
                                'Matrix',
                            ],
                            place: [
                                'Online',
                                'Link',
                            ],
                            homeTaskInfo: []
                        },
                    },
                },
                mt2: {
                    stufInfo: [
                        ['red'],
                        ['Match']
                    ],
                    lessonsId: {
                        mt12005210: {
                            dateTime: [
                                '20-05-21',
                                'Cht',
                                '10-15',
                                '11-45',
                            ],
                            lessonInfo: [
                                'Vorovich Yelena Alexandrovna',
                                'Matrix',
                            ],
                            place: [
                                'Online',
                                'Link',
                            ],
                            homeTaskInfo: []
                        },
                    },
                },
                ap1: {
                    stufInfo: [
                        'darkBlue',
                        'AstroPhisics'
                    ],
                    lessonsId: {
                        ap11705210: {
                            dateTime: [
                                '17-05-21',
                                'Pn',
                                '12-00',
                                '13-30'
                            ],
                            lessonInfo: [
                                'Petrov Ivan Sergeyevich',
                                'Osnovi astronomiyi'
                            ],
                            place: [
                                8,
                                617
                            ],
                            homeTaskInfo: []
                        },
                        ap12105210: {
                            dateTime: [
                                '21-05-21',
                                'Pt',
                                '12-00',
                                '13-30'
                            ],
                            lessonInfo: [
                                'Petrov Ivan Sergeyevich',
                                'Osnovi astronomiyi'
                            ],
                            place: [
                                8,
                                617
                            ],
                            homeTaskInfo: []
                        },
                        ap12105211: {
                            dateTime: [
                                '21-05-21',
                                'Pt',
                                '14-45',
                                '16-15'
                            ],
                            lessonInfo: [
                                'Petrov Ivan Sergeyevich',
                                'Osnovi astronomiyi'
                            ],
                            place: [
                                8,
                                617
                            ],
                            homeTaskInfo: []
                        },
                        ap12405210: {
                            dateTime: [
                                '24-05-21',
                                'Pn',
                                '12-00',
                                '13-30'
                            ],
                            lessonInfo: [
                                'Petrov Ivan Sergeyevich',
                                'Osnovi astronomiyi'
                            ],
                            place: [
                                8,
                                617
                            ],
                            homeTaskInfo: []
                        },
                        ap12405211: {
                            dateTime: [
                                '24-05-21',
                                'Pn',
                                '14-15',
                                '16-45'
                            ],
                            lessonInfo: [
                                'Petrov Ivan Sergeyevich',
                                'Osnovi astronomiyi'
                            ],
                            place: [
                                8,
                                617
                            ],
                            homeTaskInfo: []
                        },
                    }
                },
                lm1: {
                    stufInfo: [
                        ['green'],
                        ['LastMile']
                    ],
                    lessonsId: {
                        lm11705210: {
                            dateTime: [
                                '17-05-21',
                                'Pn',
                                '14-45',
                                '16-15',
                            ],
                            lessonInfo: [
                                'Ostapov Valeriy Anatolyevich',
                                'Opisaniye processov logistiki',
                            ],
                            place: [
                                'TRC Mega',
                                ' ',
                            ],
                            homeTaskInfo: []
                        },
                        lm11705211: {
                            dateTime: [
                                '17-05-21',
                                'Pn',
                                '16-30',
                                '18-00',
                            ],
                            lessonInfo: [
                                'Ostapov Valeriy Anatolyevich',
                                'Opisaniye processov logistiki',
                            ],
                            place: [
                                'TRC Mega',
                                ' ',
                            ],
                            homeTaskInfo: []
                        },
                        lm12105210: {
                            dateTime: [
                                '21-05-21',
                                'Pt',
                                '14-45',
                                '16-15',
                            ],
                            lessonInfo: [
                                'Ostapov Valeriy Anatolyevich',
                                'Opisaniye processov logistiki',
                            ],
                            place: [
                                'TRC Mega',
                                ' ',
                            ],
                            homeTaskInfo: []
                        },
                        lm12405210: {
                            dateTime: [
                                '24-05-21',
                                'Pn',
                                '14-45',
                                '16-15',
                            ],
                            lessonInfo: [
                                'Ostapov Valeriy Anatolyevich',
                                'Proyectirovaniye marshrutov'
                            ],
                            place: [
                                'TRC Mega',
                                ' ',
                            ],
                            homeTaskInfo: []
                        },
                    },
                },
            }
        }

        /* Добавить функцию добавления/редактирования данных:
            1. Модуля
            2. Занятия
        */

    };

    render() {

            //Сюда загружаем координаты запрашиваеммых данных
        let db = [
            [
                this.state.modulsId.en1.stufInfo,
                
                this.state.modulsId.en1.lessonsId.en11705210.dateTime,
                this.state.modulsId.en1.lessonsId.en11705210.lessonInfo,
                this.state.modulsId.en1.lessonsId.en11705210.place,
                this.state.modulsId.en1.lessonsId.en11705210.homeTaskInfo,

                this.state.modulsId.en1.lessonsId.en11905210.dateTime,
                this.state.modulsId.en1.lessonsId.en11905210.lessonInfo,
                this.state.modulsId.en1.lessonsId.en11905210.place,
                this.state.modulsId.en1.lessonsId.en11905210.homeTaskInfo,
                
                this.state.modulsId.en1.lessonsId.en12105210.dateTime,
                this.state.modulsId.en1.lessonsId.en12105210.lessonInfo,
                this.state.modulsId.en1.lessonsId.en12105210.place,
                this.state.modulsId.en1.lessonsId.en12105210.homeTaskInfo,
                
                this.state.modulsId.en1.lessonsId.en12405210.dateTime,
                this.state.modulsId.en1.lessonsId.en12405210.lessonInfo,
                this.state.modulsId.en1.lessonsId.en12405210.place,
                this.state.modulsId.en1.lessonsId.en12405210.homeTaskInfo,
                
                this.state.modulsId.en1.lessonsId.en12605210.dateTime,
                this.state.modulsId.en1.lessonsId.en12605210.lessonInfo,
                this.state.modulsId.en1.lessonsId.en12605210.place,
                this.state.modulsId.en1.lessonsId.en12605210.homeTaskInfo,
            ], [
                this.state.modulsId.ph1.stufInfo,

                this.state.modulsId.ph1.lessonsId.ph11805210.dateTime,
                this.state.modulsId.ph1.lessonsId.ph11805210.lessonInfo,
                this.state.modulsId.ph1.lessonsId.ph11805210.place,
                this.state.modulsId.ph1.lessonsId.ph11805210.homeTaskInfo,

                this.state.modulsId.ph1.lessonsId.ph11805211.dateTime,
                this.state.modulsId.ph1.lessonsId.ph11805211.lessonInfo,
                this.state.modulsId.ph1.lessonsId.ph11805211.place,
                this.state.modulsId.ph1.lessonsId.ph11805211.homeTaskInfo,

                this.state.modulsId.ph1.lessonsId.ph12505210.dateTime,
                this.state.modulsId.ph1.lessonsId.ph12505210.lessonInfo,
                this.state.modulsId.ph1.lessonsId.ph12505210.place,
                this.state.modulsId.ph1.lessonsId.ph12505210.homeTaskInfo,

                this.state.modulsId.ph1.lessonsId.ph12505211.dateTime,
                this.state.modulsId.ph1.lessonsId.ph12505211.lessonInfo,
                this.state.modulsId.ph1.lessonsId.ph12505211.place,
                this.state.modulsId.ph1.lessonsId.ph12505211.homeTaskInfo,
            ], [
                this.state.modulsId.sp1.stufInfo,

                this.state.modulsId.sp1.lessonsId.sp11705210.dateTime,
                this.state.modulsId.sp1.lessonsId.sp11705210.lessonInfo,
                this.state.modulsId.sp1.lessonsId.sp11705210.place,
                this.state.modulsId.sp1.lessonsId.sp11705210.homeTaskInfo,
                
                this.state.modulsId.sp1.lessonsId.sp11905210.dateTime,
                this.state.modulsId.sp1.lessonsId.sp11905210.lessonInfo,
                this.state.modulsId.sp1.lessonsId.sp11905210.place,
                this.state.modulsId.sp1.lessonsId.sp11905210.homeTaskInfo,
                
                this.state.modulsId.sp1.lessonsId.sp12105210.dateTime,
                this.state.modulsId.sp1.lessonsId.sp12105210.lessonInfo,
                this.state.modulsId.sp1.lessonsId.sp12105210.place,
                this.state.modulsId.sp1.lessonsId.sp12105210.homeTaskInfo,

                this.state.modulsId.sp1.lessonsId.sp12205210.dateTime,
                this.state.modulsId.sp1.lessonsId.sp12205210.lessonInfo,
                this.state.modulsId.sp1.lessonsId.sp12205210.place,
                this.state.modulsId.sp1.lessonsId.sp12205210.homeTaskInfo,

                this.state.modulsId.sp1.lessonsId.sp12405210.dateTime,
                this.state.modulsId.sp1.lessonsId.sp12405210.lessonInfo,
                this.state.modulsId.sp1.lessonsId.sp12405210.place,
                this.state.modulsId.sp1.lessonsId.sp12405210.homeTaskInfo,

                this.state.modulsId.sp1.lessonsId.sp12605210.dateTime,
                this.state.modulsId.sp1.lessonsId.sp12605210.lessonInfo,
                this.state.modulsId.sp1.lessonsId.sp12605210.place,
                this.state.modulsId.sp1.lessonsId.sp12605210.homeTaskInfo,
            ], [
                this.state.modulsId.mt1.stufInfo,

                this.state.modulsId.mt1.lessonsId.mt12205210.dateTime,
                this.state.modulsId.mt1.lessonsId.mt12205210.lessonInfo,
                this.state.modulsId.mt1.lessonsId.mt12205210.place,
                this.state.modulsId.mt1.lessonsId.mt12205210.homeTaskInfo,
            ], [
                this.state.modulsId.mt2.stufInfo,

                this.state.modulsId.mt2.lessonsId.mt12005210.dateTime,
                this.state.modulsId.mt2.lessonsId.mt12005210.lessonInfo,
                this.state.modulsId.mt2.lessonsId.mt12005210.place,
                this.state.modulsId.mt2.lessonsId.mt12005210.homeTaskInfo,
            ], [
                this.state.modulsId.ap1.stufInfo,

                this.state.modulsId.ap1.lessonsId.ap11705210.dateTime,
                this.state.modulsId.ap1.lessonsId.ap11705210.lessonInfo,
                this.state.modulsId.ap1.lessonsId.ap11705210.place,
                this.state.modulsId.ap1.lessonsId.ap11705210.homeTaskInfo,
                
                this.state.modulsId.ap1.lessonsId.ap12105210.dateTime,
                this.state.modulsId.ap1.lessonsId.ap12105210.lessonInfo,
                this.state.modulsId.ap1.lessonsId.ap12105210.place,
                this.state.modulsId.ap1.lessonsId.ap12105210.homeTaskInfo,
                
                this.state.modulsId.ap1.lessonsId.ap12105211.dateTime,
                this.state.modulsId.ap1.lessonsId.ap12105211.lessonInfo,
                this.state.modulsId.ap1.lessonsId.ap12105211.place,
                this.state.modulsId.ap1.lessonsId.ap12105211.homeTaskInfo,
                
                this.state.modulsId.ap1.lessonsId.ap12405210.dateTime,
                this.state.modulsId.ap1.lessonsId.ap12405210.lessonInfo,
                this.state.modulsId.ap1.lessonsId.ap12405210.place,
                this.state.modulsId.ap1.lessonsId.ap12405210.homeTaskInfo,
                
                this.state.modulsId.ap1.lessonsId.ap12405211.dateTime,
                this.state.modulsId.ap1.lessonsId.ap12405211.lessonInfo,
                this.state.modulsId.ap1.lessonsId.ap12405211.place,
                this.state.modulsId.ap1.lessonsId.ap12405211.homeTaskInfo,
            ], [
                this.state.modulsId.lm1.stufInfo,

                this.state.modulsId.lm1.lessonsId.lm11705210.dateTime,
                this.state.modulsId.lm1.lessonsId.lm11705210.lessonInfo,
                this.state.modulsId.lm1.lessonsId.lm11705210.place,
                this.state.modulsId.lm1.lessonsId.lm11705210.homeTaskInfo,
                
                this.state.modulsId.lm1.lessonsId.lm11705211.dateTime,
                this.state.modulsId.lm1.lessonsId.lm11705211.lessonInfo,
                this.state.modulsId.lm1.lessonsId.lm11705211.place,
                this.state.modulsId.lm1.lessonsId.lm11705211.homeTaskInfo,
                
                this.state.modulsId.lm1.lessonsId.lm12105210.dateTime,
                this.state.modulsId.lm1.lessonsId.lm12105210.lessonInfo,
                this.state.modulsId.lm1.lessonsId.lm12105210.place,
                this.state.modulsId.lm1.lessonsId.lm12105210.homeTaskInfo,
                
                this.state.modulsId.lm1.lessonsId.lm12405210.dateTime,
                this.state.modulsId.lm1.lessonsId.lm12405210.lessonInfo,
                this.state.modulsId.lm1.lessonsId.lm12405210.place,
                this.state.modulsId.lm1.lessonsId.lm12405210.homeTaskInfo,
            ]
        ];

            //Добавить возможность экспорта данных
        return(
            <>
                <div>
                    <p>TestDB</p>
                </div>
                <div>
                    <ol>
                        {db.map((id, index) => (
                            <li key={index}>
                                <p>{id}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </>
        )
    }
}

//Добавить возможность сохранения и перезаписи базы данных во внешний файл/БД (опционально)