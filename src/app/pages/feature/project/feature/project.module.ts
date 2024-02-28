import { NgModule } from "@angular/core";
import { ProjectRoutingModule } from "./project-routing.module";
import { DataInputService } from "./data-input/services/data-input.service";

@NgModule({

    imports: [ProjectRoutingModule],
    declarations: [],
    providers: [DataInputService]

})

export class ProjectModule{}