
const schedule = {
    lunes: {
        jm: {
            '07:00am - 08:30am': 'Aprender Node js',
            '08:40am - 10:00am': 'Aprender CSS',
            '10:10am - 11:30am': 'Aprender Java',
            '11:30am - 12:40pm': 'Practica Libre',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '06:30am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': 'Aprender CSS',
            '03:30pm - 05:30pm': 'Aprender Java',
            '05:45pm - 07:00pm': 'Aprender Node JS',
            '07:10pm - 09:00pm': 'Practica libre'
        }
    },
    martes: {
        jm: {
            '07:00am - 08:30am': 'Aprender Node js',
            '08:40am - 10:00am': 'Aprender CSS',
            '10:10am - 11:30am': 'Aprender Java',
            '11:30am - 12:40pm': 'Practica Libre',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '06:30am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': 'Aprender CSS',
            '03:30pm - 05:30pm': 'Aprender Node JS',
            '05:45pm - 07:00pm': 'Aprender Java',
            '07:10pm - 09:00pm': 'Practica libre'
        }
    },
    miercoles: {
        jm: {
            '07:00am - 08:30am': 'Aprender Java',
            '08:40am - 10:00am': 'Aprender CSS',
            '10:10am - 11:30am': 'Aprender Node JS',
            '11:30am - 12:40pm': 'Practica Libre',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '07:00am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': 'Aprender CSS',
            '03:30pm - 05:30pm': 'Aprender Node JS',
            '05:45pm - 07:00pm': 'Aprender Java',
            '07:10pm - 09:00pm': 'Practica libre'
        }
    },
    jueves: {
        jm: {
            '07:00am - 08:30am': 'Aprender Node js',
            '08:40am - 10:00am': 'Aprender CSS',
            '10:10am - 11:30am': 'Aprender Java',
            '11:30am - 12:40pm': 'Practica Libre',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '06:30am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': 'Aprender CSS',
            '03:30pm - 05:30pm': 'Aprender Node JS',
            '05:45pm - 07:00pm': 'Aprender Java',
            '07:10pm - 09:00pm': 'Practica libre'
        }
    },
    viernes: {
        jm: {
            '07:00am - 08:30am': 'Aprender Node js',
            '08:40am - 10:00am': 'Aprender CSS',
            '10:10am - 11:30am': 'Aprender Java',
            '11:30am - 12:40pm': 'Practica Libre',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '06:30am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': 'Aprender CSS',
            '03:30pm - 05:30pm': 'Aprender Java',
            '05:45pm - 07:00pm': 'Aprender Node JS',
            '07:10pm - 09:00pm': 'Practica libre'
        }
    },
    sabado: {
        jm: {
            '07:00am - 08:30am': '',
            '08:40am - 10:00am': '',
            '10:10am - 11:30am': '',
            '11:30am - 12:40pm': '',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '06:30am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': '',
            '03:30pm - 05:30pm': '',
            '05:45pm - 07:00pm': '',
            '07:10pm - 09:00pm': ''
        }
    },
    domingo: {
        jm: {
            '07:00am - 08:30am': '',
            '08:40am - 10:00am': '',
            '10:10am - 11:30am': '',
            '11:30am - 12:40pm': '',
            '01:30pm - 09:30pm': 'Jornada de Trabajo',
        },
        jt: {
            '06:30am - 01:30pm': 'Jornada de Trabajo',
            '02:20pm - 03:20pm': '',
            '03:30pm - 05:30pm': '',
            '05:45pm - 07:00pm': '',
            '07:10pm - 09:00pm': ''
        }
    }
}

const asignSchedule = (dia, jor) => {
    const tableJm = document.querySelector(`.table-${dia}`);
    tableJm.innerHTML = '';

    const caption = document.createElement('caption');
    const trHead = document.createElement('tr');
    const thH = document.createElement('th');
    const thT = document.createElement('th');

    thH.textContent = 'Hora';
    thT.textContent = 'Tema';

    caption.textContent = (jor === 'jm') ? 'Jornada de la Mañana' : 'Jornada de la Tarde';

    trHead.appendChild(thH);
    trHead.appendChild(thT);

    tableJm.appendChild(caption);
    tableJm.appendChild(trHead);

    for (const horario in schedule[dia][jor]) {
        let trData = document.createElement('tr');
        let tdH = document.createElement('td');
        let tdT = document.createElement('td');

        tdH.textContent = horario;
        tdT.textContent = schedule[dia][jor][horario];

        trData.appendChild(tdH);
        trData.appendChild(tdT);

        tableJm.appendChild(trData);
    }
}

document.addEventListener('click', e => {

    if (e.target.matches('.am-lunes')) {
        const schToSee = ['lunes', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-lunes')) {
        const schToSee = ['lunes', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.am-martes')) {
        const schToSee = ['martes', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-martes')) {
        const schToSee = ['martes', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }
    if (e.target.matches('.am-miercoles')) {
        const schToSee = ['miercoles', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }
    if (e.target.matches('.pm-miercoles')) {
        const schToSee = ['miercoles', 'jt']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-jueves')) {
        const schToSee = ['jueves', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }
    if (e.target.matches('.am-jueves')) {
        const schToSee = ['jueves', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-jueves')) {
        const schToSee = ['jueves', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }
    if (e.target.matches('.am-viernes')) {
        const schToSee = ['viernes', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-viernes')) {
        const schToSee = ['viernes', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }
    if (e.target.matches('.am-sabado')) {
        const schToSee = ['sabado', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-sabado')) {
        const schToSee = ['sabado', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }
    if (e.target.matches('.am-domingo')) {
        const schToSee = ['domingo', 'jm']
        asignSchedule(schToSee[0], schToSee[1]);
    }

    if (e.target.matches('.pm-domingo')) {
        const schToSee = ['domingo', 'jt'];
        asignSchedule(schToSee[0], schToSee[1]);
    }
});

const hJM = () => {
    const week = Object.keys(schedule);
    week.forEach(day => {
        asignSchedule(day, 'jm');
    })
}
const btnJM = document.querySelector('.JM');
btnJM.addEventListener('click', () => {
    hJM();
});

const hJT = () => {
    const week = Object.keys(schedule);
    week.forEach(day => {
        asignSchedule(day, 'jt');
    })
}
const btnJT = document.querySelector('.JT');
btnJT.addEventListener('click', () => {
    hJT();
});

const btnDN = document.querySelector('.d-n');

btnDN.addEventListener('click', () => {
    const content = document.querySelector('.content');
    const btns = document.querySelectorAll('.btns');
    content.classList.toggle('mode-dark');
    btns.forEach(btn =>{
        btn.classList.toggle('mode-dark');
    });
});