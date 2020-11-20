# Jitsi Outlook Add-In

This repository contains the source code for an [Outlook Add-in](https://docs.microsoft.com/en-us/office/dev/add-ins/) that allows you to create and insert [Jitsi Meet](meet.jit.si) meeting links into an email or a calendar invite. You can
* create a meeting link using a specific meeting name
* create a meeting link using a random meeting name

## How to install the add-in

1. Open a new message
2. Click on the three dots on the bottom bar
3. Click on *Get Add-ins*
4. Navigate to *My Add-ins*
5. Scroll to the bottom and click on *+ Add a custom add-in*
6. Choose *Add from URL...*
7. Paste the link to the manifest, hosted on gihub pages: https://sabinebertram.github.io/jitsi-outlook-add-in/manifest.prod.xml
8. Click *Install*
9. The Add-in is listed under *Custom Add-ins". 
10. Close the window.

You should now be able to use it by clicking on the three dots again and selecting "Jitsi Meeting".

## How to run the add-in locally