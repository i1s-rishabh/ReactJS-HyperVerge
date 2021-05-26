In this directory, I'm trying to find the difference between render and component prop on React Router and you know what i got to know amazing things

That is ---- there is not performance different between component and render prop if you are use component={AppComponent} directly, if you want to assign some props to AppComponent, use render={() => <AppComponent {...props}/> } instead of component={() => <AppComponent {...props}/> }
