import {
    CellClickEventArgs,
    EJ2Instance,
    EventRenderedArgs,
    ScheduleComponent
} from "@syncfusion/ej2-angular-schedule";
import {TextBoxComponent} from "@syncfusion/ej2-angular-inputs";

export function getData(): any[] {
    return (
        [
            {
                Id: 1,
                Subject: 'Rachel',
                Location: 'Training in Samsara',
                Price: '300',
                Open: true,
                CurrentUser: '',
                StartTime: new Date(2022, 3, 28, 13, 30),
                EndTime: new Date(2022, 3, 28, 14, 15),
                IsAllDay: false,
            },
            {
                Id: 2,
                Subject: 'Yaael\'s BF',
                Location: 'Training in Yel-hai',
                Price: '500',
                CurrentUser: 'Sam',
                Open: false,
                StartTime: new Date(2022, 3, 27, 13, 30),
                EndTime: new Date(2022, 3, 27, 14, 15),
                IsAllDay: false,
            },
            {
                Id: 3,
                Subject: 'Yaael\'s BF',
                Location: 'Training in Yel-hai',
                Price: '500',
                CurrentUser: 'Sam',
                Open: false,
                StartTime: new Date(new Date().getTime() + 60000 * 5),
                EndTime: new Date(new Date().getTime() + 60000 * 50),
                IsAllDay: false,
            },
            {
                Id: 4,
                Subject: 'Yaael\'s BF',
                Location: 'Training in Yel-hai',
                Price: '500',
                CurrentUser: 'Sam',
                Open: false,
                StartTime: new Date(new Date().getTime() + 60000 * 180),
                EndTime: new Date(new Date().getTime() + 60000 * 225),
                IsAllDay: false,
            }
        ] );
}


export function getNewCellData(scheduleObj: ScheduleComponent) {
    // only god knows what these are for.
    const quickPopup: HTMLElement = <HTMLElement>document.getElementsByClassName('e-quick-popup-wrapper').item(0);
    let cellDetails: CellClickEventArgs = scheduleObj.getCellDetails(scheduleObj.getSelectedElements());
    if (!cellDetails)
        cellDetails = scheduleObj.getCellDetails(<HTMLElement>scheduleObj.activeCellsData.element);

    // take input
    const location = ((quickPopup.querySelector('#location') as EJ2Instance).ej2_instances[0] as TextBoxComponent).value;

    // handle input
    if (!location) throw new Error('Missing field location');

    // set data in object
    const addObj: Record<string, any> = {};
    addObj['Id'] = scheduleObj.getEventMaxID();
    addObj['StartTime'] = new Date(cellDetails.startTime);
    addObj['EndTime'] = new Date(cellDetails.endTime);
    addObj['Open'] = true;
    addObj['Location'] = `Training in ${location}`;

    return addObj;
}

export function createPriceElement(element: EventRenderedArgs) {
    let node = document.createElement('div'); // create the new div
    node.className = 'e-price'; // give it a good class name
    node.innerText = element.data['Price'] + '  ';
    const shq = document.createElement('i'); // add the NIS icon
    shq.className = 'fa fa-shekel';
    element.element.querySelector('.e-appointment-details')?.appendChild(node).appendChild(shq);
}

export function getEventIndexById(scheduleObj: ScheduleComponent, id: number): number {
    for (let i = 0; i < scheduleObj.eventsData.length; i++) {
        if (scheduleObj.eventsData[i]['Id'] === id)
            return i;
    }
    throw new Error(`Event not found by id, id = ${id}`);
}

export function getTimeAsISO(date: Date): string {
    let tt = date.toISOString()
        .replace(/[-:.]/g, '');
    tt = tt.slice(0, tt.length - 4) + 'Z';
    return tt;
}
