import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  combineLatest,
  debounceTime,
  filter,
  forkJoin,
  map,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from "rxjs";
import { MockDataService } from "./mock-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  searchTermByCharacters = new Subject<string>();
  charactersResults$!: Observable<any>;
  planetAndCharactersResults$!: Observable<any>;
  isLoading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.initLoadingState();
    this.initCharacterEvents();
  }

  changeCharactersInput(element: any): void {
    // 1.1. Add functionality to changeCharactersInput method. Changes searchTermByCharacters Subject value on input change.
    const inputValue = element.target.value;
    // YOUR CODE STARTS HERE
    this.searchTermByCharacters.next(inputValue as string); //casted to string here as the type is not defined initially

    // YOUR CODE ENDS HERE
  }

  initCharacterEvents(): void {
    // 1.2. Add API call on each user input. Use mockDataService.getCharacters - to make get request.

    // 2. Since we don't want to spam our service add filter by input value and do not call API until a user enters at least 3 chars.

    // 3. Add debounce to prevent API calls until user stop typing.

    this.charactersResults$ = this.searchTermByCharacters.pipe(
      // YOUR CODE STARTS HERE
      filter((searchTerm: string) => searchTerm.length >= 3),
      debounceTime(300), // is there any standard time for debounce?
      switchMap((searchTerm: string) =>
        this.mockDataService.getCharacters(searchTerm)
      )
    );
    // YOUR CODE ENDS HERE
  }

  loadCharactersAndPlanet(): void {
    // 4. On clicking the button 'Load Characters And Planets', it is necessary to process two requests and combine the results of both requests into one result array. As a result, a list with the names of the characters and the names of the planets is displayed on the screen.
    // Your code should looks like this: this.planetAndCharactersResults$ = /* Your code */
    // YOUR CODE STARTS HERE

    const charactersResult$ :Observable<any[]> = this.mockDataService.getCharacters();
    const planetsResult$ :Observable<any[]>= this.mockDataService.getPlanets();
    this.planetAndCharactersResults$ = forkJoin([
      charactersResult$,
      planetsResult$,
    ]).pipe(map(([characters, planets]) => [...characters, ...planets]));

    // YOUR CODE ENDS HERE
  }

  initLoadingState(): void {
    /* 5.1. Let's add loader logic to our page. For each request, we have an observable that contains the state of the request. When we send a request the value is true, when the request is completed, the value becomes false. You can get value data with mockDataService.getCharactersLoader() and mockDataService.getPlanetLoader().

    - Combine the value of each of the streams.
    - Subscribe to changes
    - Check the received value using the areAllValuesTrue function and pass them to the isLoading variable. */
    // YOUR CODE STARTS HERE

    const charactersLoadingState$:Observable<boolean> = this.mockDataService.getCharactersLoader();
    const planetsLoadingState$:Observable<boolean> = this.mockDataService.getPlanetLoader();
    combineLatest([
      charactersLoadingState$,
      planetsLoadingState$,
    ])
      .pipe(map((loadingStates:boolean[]) => this.areAllValuesTrue(loadingStates)))
      .subscribe((isLoadingResult:boolean) => {
        this.isLoading = isLoadingResult;
      });

    // YOUR CODE ENDS HERE
  }

  ngOnDestroy(): void {
    // 5.2 Unsubscribe from all subscriptions
    // YOUR CODE STARTS HERE
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe
    );
    // YOUR CODE ENDS HERE
  }

  areAllValuesTrue(elements: boolean[]): boolean {
    return elements.every((el) => el);
  }
}
