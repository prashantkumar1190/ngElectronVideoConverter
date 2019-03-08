
import { ArrayFilterPipe } from './pipes/filter-by.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { FileSizePipe } from './pipes/fileSize';

import { DropdownComponent } from './components/dropdown/dropdown.component';

export const SHARED_PIPES = [
    LimitToPipe,
    ArrayFilterPipe,
    FileSizePipe
];

export const SHARED_COMPONENTS = [
    DropdownComponent
];

