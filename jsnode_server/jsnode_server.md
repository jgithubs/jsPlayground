# YouTube Overview

This project is the path to learn HTML/CSS/JavaScript.
The path is to start from the FrontEnd then proceed to a minimal BackEnd.
The details to access the project is [described and published](https://github.com/jgithubs/jsPlayground) on GitHub.

## Node.js Tutorial for Beginners: Learn Node in 1 Hour
#### Programming with Mosh 

[First Node Application](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=13m01s) 

jsnode_server1.js

### Node Module System 

[Global Object, 15m54s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=15m54s) 

[Modules, 19m16s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=19m16s) 
* jsnode_server1.js

[Creating a Module, 22m52s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=22m52s) 
* logger1.js

[Loading a Module, 27m37s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=27m37s) 

[Path Module, 39m55s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=39m55s) 

[Events Module, 53m19s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=53m19s) 

[Event Arguments, 59m37s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=59m37s) 

[Extending EventEmitter, 1h02m46s](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=1h02m46s) 

[HTTP Modules](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=1h10m49s) 
* jsnode_server6.js

[HTTP Modules Callback](http://www.youtube.com/watch?v=TlB_eWDSMt4&t=1h14m00s) 
* jsnode_server7.js

## Node.js Tutorial for Beginners: Learn Node in 1 Hour
### Frameworks

Restful Services 


## Project Components

The hardware is an RFID reader connected to a Raspberry Pi.
When the RFID reads a know tag, it will signal playback of music with associated images.
A 3D part will be created and a known RFID tag will be placed inside of the game piece.
When the game piece comes off the board, the player will swipe it across the RFID reader.
The student's content will play on a HDMI screen that has a built in speaker.

* [Hardware/Software installation](hw-project.md) for Project 
* [Development files for picture/audio/RFID](sw-development.md)
* [Student Create Software](sc-project.md)
* [Student 3D Printing](sc-print3d.md)

### What Remains

* Testing
  * Turn up the volume (via script or before hand).
  * Enable the user to set a volume level in their setup.
* Need to add another field to compensate for audio levels.
  * Audio levels may not be the same for each student.
  * Audio levels need to be set initially for the default audio/pictures.
* All 3D printing aspects are pending.

### Board Information

* Board has 64 squares
* Board dimension: 28" x 28"
* Each player has 12 pieces (Total of 24 pieces)
* Board is made of fabric, previously purchased.

![Checker Board](img/CheckerBoard-doxy.jpg)

### Piece Information

* Dimensions
  * Player Piece is 3" diameter.

  * Thickness is 3/4" in height.
* One face will remain standard, the other face will be created by the student (King side).

![Checker Piece](img/CheckerMeasure-doxy.jpg)

### Running the Demo

#### Set up the physical connections.
  * Connect primary connections, excluding the power (the USB Power cable).
    * Ignore the hardware case, it is not required.
    * The [RFID hardware](hw-rfid-rc522.md) is not shown.
    * The mouse is not required since the image is headless.
    * The HDMI is connected to a [HDMI monitor](hw-audio-hdmi.md) with speakers.
    * Turn on the HDMI monitor so that it is reconized when power is turned on.
    * The SD card is expected to be [previously installed](hw-project.md) with the described image.

![Raspberry Pi 2, Connection](img/PiConnection1.jpg)
  * Connect the [RFID hardware](hw-rfid-rc522.md).
    * This is connected on the far left because the far right is used for the [serial connection](hw-serial-connect.md) (if used).
![RFID-RC522, Inverted to align with previous picture](img/RaspberryPi-RFID.png)
  * Connect the the power (via the usb cable).
    - Powering will cause the hardware to boot from the image written to the SD card.
    - A log-in screen will appear on the monitor.

#### Log in and project scripts.
Scripts were written to use and bind the installed software. The user needs to login and start two scripts using the [screen command](sw-session-screen.md).

* Default credentials
  * Username: pi
  * Password: raspberry
```
cd $HOME
screen bash
./readAudio.py
CNTRL-A
d
```
* Screen 2 (returned after detach command)
```
cd $HOME
./run-loop.sh
```

The default screen will display images and music.
The screen will be played over and over until the student swipes their [configured](sc-project.md) RFID tag.

#### Swiping of RFID tags.
The RFID tag contains a unique number.
Before a tag can work, it's RFID number needs to be written into the system with a single audio and multiple pictures.

The following are two example rfid's that came with the purchase of the RFID reader.
If their RFID number has already been setup with the Raspberry Pi, then the following will happen.

<img src=http://ecx.images-amazon.com/images/I/81m6UBRj7fL._SX425_.jpg width=380>

* A default image and music will play continously.
* Swipe the example RFID tag across the RFID reader.
  * The image and music will change from the default.
* Swipe another example RFID tag across the RFID reader.
  * The image and music will change again.
* When the music is complete, the default will play again.
* To exit the program, simply hit CNTRL-C. 

#### Shutting down the Raspberry Pi

The Raspberry Pi needs to be shutdown gracefully.
This is to avoid corruption of the Image on the SD card.
You need to invoke the command as an administrator, therefore, use 'sudo'.
You may be prompted for a password.
The password is the same as the login password.

* Gracefully shutdown the Pi for power off.
```
sudo shutdown now -h
```
* Pull the USB power from the board when the text on the screen stops for a long duration.

## Documentation

The documentation is created using [doxygen](http://www.stack.nl/~dimitri/doxygen/index.html).
This documentation is stored in git hub: https://github.com/jgithubs/jsplayarea
Doxygen is used to verify the documentation before it is uploaded to GitHub.

* Create a configuration file
```
doxygen -g doxyConfig
```
* Modify the configuration file for github
```
  Line 035, PROJECT_NAME           = "Checkerboard Project"
  Line 061, OUTPUT_DIRECTORY       = ./DoxyOutput
  Line 793, INPUT                  = README.md \
                                     .
  Line 867, RECURSIVE              = YES
  Line 929, IMAGE_PATH             = .
  Line 985, USE_MDFILE_AS_MAINPAGE = README.md
```
* Difference between default configuration and modified configuration
```
gitbash> diff doxyDefault DoxyConfig
35c35
< PROJECT_NAME           = "My Project"
---
> PROJECT_NAME           = "Checkerboard Project"
61c61
< OUTPUT_DIRECTORY       =
---
> OUTPUT_DIRECTORY       = ../DoxyOutput
793c793,794
< INPUT                  =
---
> INPUT                  = README.md \
>                          .
867c868
< RECURSIVE              = NO
---
> RECURSIVE              = YES
929c930
< IMAGE_PATH             =
---
> IMAGE_PATH             = .
985c986
< USE_MDFILE_AS_MAINPAGE =
---
> USE_MDFILE_AS_MAINPAGE = README.md
```
* Create the output
```
doxygen doxyConfig
```
* View the output in the following directory. The output will show up in the default web browser.
```
../DoxyOutput/html/index.html
```
* The desired format is Markdown (MD), https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet  
* Suggested style, http://www.cirosantilli.com/markdown-style-guide/
* Mix, http://rickfoosusa.blogspot.com/2011/10/howto-use-doxygen-with-github.html

## Schematics

The wiring diagram is done using the Fritizing tool.

* Fritzing download, http://fritzing.org/download/

## GitHub

The documentation is stored in GitHub. GitHub has a [series of commands](sw-github.md) to check changes in and out.
