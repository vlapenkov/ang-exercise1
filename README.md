# Exercise1

Под каждый виджет сделан свой компонент, 
События работают так:
1. Выбор категории  (Hotel, Fishing, etc ...) : PlacesfilterComponent->  AppComponent-> PlaceslistComponent
2. Выбор места (клик мышкой): PlaceCardComponent-> PlaceslistComponent ->AppComponent -> далее в 2 (Temperature и Toddy)
3. Директива PlacesfilterPipe фильтрует по категории