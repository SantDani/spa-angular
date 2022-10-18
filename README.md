# spa-angular

## Remember

When you create a new Micro-frontend (mf) remember change in angular:
- `app-routing.module.ts`
- `app.module`
#### App-routing.module.ts


```ts
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule { }
```

#### App.module

Add to `app.module` the module `EmptyRotueComponent`.

```ts
declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  ...
```
