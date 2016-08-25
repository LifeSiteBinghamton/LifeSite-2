import { EventEmitter, OnInit, AfterViewInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormComponent } from 'frameworks';

@FormComponent({
    moduleId: module.id,
    selector: 'ls-password',
    templateUrl: 'ls-password.html',
    styleUrls: ['ls-password.css']
})
export class LsPassword implements OnInit, AfterViewInit {
    @Input() buttonLabel: string;
    @Input() inputLabel: string = 'Password';
    @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('password') passwordRef: ElementRef;

    private password: HTMLInputElement;
    private passwordControl: FormControl;

    ngOnInit() {
        this.passwordControl = new FormControl('');
    }

    ngAfterViewInit(): any {
        this.password = this.passwordRef.nativeElement;
    }

    hasUppercase() {
        return /[A-Z]/.test(this.password.value);
    }

    hasNumber() {
        return /[0-9]/.test(this.password.value);
    }

    hasSymbol() {
        return /[!@#$%\^&*()<>_+\[\]{}?:;|'"\\,.\/~`\-=]/.test(this.password.value);
    }
}
