import { Subject } from 'rxjs';

export class ObservableService {
    productsLocation = new Subject();
    productsMaxPrice = new Subject();
}