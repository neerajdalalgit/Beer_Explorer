import { LightningElement } from 'lwc';

import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowToast extends LightningElement {


    handleClick(){

        const toast = new showToastEvent({

            'title' : 'Sample Toast',
            "message" : 'This is simple message'
        });

        this.dispatchEvent(toast);

        const toast1 = new showToastEvent({

            'title' : 'Sample Toast',
            "message" : 'This is error message',
            "variant": "error"
        });

        this.dispatchEvent(toast1);

        const toast2 = new showToastEvent({

            'title' : 'Sample Toast',
            "message" : 'This is success message',
            "variant" : 'success'
        });

        this.dispatchEvent(toast2);

        const toast3 = new showToastEvent({

            'title' : 'Sample Toast',
            "message" : 'This is warning message',
            "variant" : 'warning'
        });

        this.dispatchEvent(toast3);


    }

}