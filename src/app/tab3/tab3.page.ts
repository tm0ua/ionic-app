import { ScanService } from './../services/scan.service';
import { Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

interface Device {
    name: string;
    address: string;
    rssi: number;
}

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    myObservable$: Observable<Device>;
    myNumbersObservable$: Observable<Device[]>;
    myNumbers: Device[] = [];
    myObservableSub: Subscription;

    constructor(public scanService: ScanService) {}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.myObservable$ = new Observable((observer) => {
            let value = 0;
            const internval = setInterval(() => {
                const device: Device = {
                    name: `dev_${value}`,
                    address: Math.random().toString(),
                    rssi: Math.random(),
                };
                observer.next(device);
                value++;
            }, 1000);

            return {unsubscribe() {}};
        });

        this.myObservableSub = this.myObservable$.subscribe({
            next: (value) => {
                console.log(value);
                this.myNumbers.push(value);
                if (this.myNumbers.length < 5) {
                    this.myNumbersObservable$ = of(this.myNumbers);
                } else {
                    this.myObservableSub.unsubscribe();
                }
            },
            error: (err) => console.log(err),
            complete: () => console.log("completed")
        });
    }

    ngOnDestory() {}
}
