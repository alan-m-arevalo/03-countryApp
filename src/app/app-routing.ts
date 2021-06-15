import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryComponent } from "./country/pages/country/country.component";
import { PerCapitalComponent } from "./country/pages/per-capital/per-capital.component";
import { PerCountryComponent } from "./country/pages/per-country/per-country.component";
import { PerRegionComponent } from "./country/pages/per-region/per-region.component";

const routes: Routes= [
    {
        path: '',
        component: PerCountryComponent,
        pathMatch: 'full'        
    },
    {
        path: 'region',
        component: PerRegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: PerCapitalComponent,
        pathMatch: 'full'
    },
    {
        path: 'details/:countryID',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }

]
@NgModule(
    {
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports:[
            RouterModule
        ],
    }   
)
export class AppRoutingModule{}