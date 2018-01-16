![destiny dashboard](https://binamatic-app.appspot.com/favicon.ico "Destiny Dashboard")

https://binamatic-app.appspot.com/

#Cryptorun.io

# Git 
1. Checkout repo

	- https://github.com/cfremgen/binamatic

2. (Optional) Checkout Binance Java API repo 
	
	- https://github.com/binance-exchange/binance-java-api

	- Our project uses a built .jar from this repo. Code checkout is not necessary but could be helpful.


# Backend

1. Download JDK

	- http://www.oracle.com/technetwork/java/javase/downloads/index.html


2. Download Cloud SDK 
	
	- https://cloud.google.com/sdk/docs/

	- Run `gcloud init` to configure SDK

	- Run `gcloud components install app-engine-java` to install App Engine Java SDK


3. Download Eclipse IDE for Java Developers

	- http://www.eclipse.org/downloads/eclipse-packages/



4. Install Cloud Tools for Eclipse 

	- https://cloud.google.com/eclipse/docs/quickstart


5. Open Project in Eclipse: File -> Open Project from file system -> `binamatic\java`


6. Set code formatter: Window -> Preferences -> Java -> Code Style -> Formatter -> Import -> `binamatic\java\eclipse-formatter.xml`



# Database

1. No DB exists yet...



# Front End

1. Recommended to use Visual Studio Code for Angular dev

	- https://code.visualstudio.com/download

	- File -> Open Folder -> Choose `binamatic\angular` directory


2. Run `npm install` from within VS Code -> View -> Integrated Terminal

3. Run `npm start` from within VS Code -> View -> Integrated Terminal

4. Navigate to `https://localhost:4200/` in your browser



# Building

1. Backend

	- There is no backend build. Java automatically compiles.


2. Frontend

	- In VS Code, Press CTRL + SHIFT + B to kick off the build.

	- This will AoT build and copy build assets to `binamatic\java\src\main\webapp`


3. Deploy

	- In Eclipse, right click on `binamatic` project. Select `Deploy to App Engine Standard`.

