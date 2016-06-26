##Sesame##
Utilizes Intel Edison's mraa library to detect the pattern in which sensors are touched. A success response is sent to a remote server if the correct pattern is entered (see main.js, hardcoded USER_PASSWORD). Code for the remote server is not included here.

###What do you need to run Sesame?###
Intel Edison
Intel XDK IoT Edition

###Wiring Up Sesame###
// TODO

###Get Sesame Up and Running###
Follow steps 1 and 2 for setting up the Edison and the XDK here: https://software.intel.com/en-us/getting-started-with-the-intel-xdk-iot-edition.

Open the Intel XDK and select 'Open an Intel XDK Project' in the bottom left corner. Select the Sesame.xdk file. Click on the 'Develop' tab to see the code.

Upload the project to the Edison by selecting the device from the IoT Device dropdown and hitting the upload button (downward-facing arrow). Start the project by hitting the run button.

When you touch the sensors, you should see numbers appear in the XDK's console. Feel free to play around by updating the password to a different set of numbers or adding sensors.
