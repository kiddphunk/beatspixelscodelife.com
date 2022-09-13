---
published: true
title: ccmixview
layout: project
category: projects
tags:
    - blog
    - beats
    - pixels
    - code
    - datavis
tools: [Flash, ActionScript, ccMixter.org]
bgcolor: 53a5a6
iid: ccmixview
parallaximage: /images/ccmixview_parallax.png
parallaxoffset: 0
parallaxduration: 800
parallaxpercent: 50
image: http://kiddphunk.com/images/projects/ccmixview/ccmixview.jpg
topimage: http://kiddphunk.com/images/projects/ccmixview/ccmixview_mini.jpg
topimagelink: http://kiddphunk.com/images/projects/ccmixview/ui2.png
bottomimage: http://kiddphunk.com/images/projects/ccmixview/ccmixview_detail.jpg
shoutout: "A visualization of interconnectivity of the tracks within the ccMixter Creative Commons music and remixing site"
fbcomments: false
aboutpage: true
share: true
---
<img class='feedimg' src='{{page.topimage}}'>

<a href='http://ccmixter.org/about'>ccmixter.org</a> is a "community music remixing site featuring remixes and samples licensed under Creative Commons licenses".

In the November 2004 issue of WIRED magazine a CD was included (<a href='https://en.wikipedia.org/wiki/The_Wired_CD'>"The Wired CD"</a>) which was a "collaborative effort between Wired magazine, Creative Commons, and sixteen musicians and groups".

<img src='http://kiddphunk.com/images/projects/ccmixview/wired.jpeg'/>

And <i>"in 2005, Creative Commons and Wired Magazine launched The Fine Art of Sampling Contest in which contestants sampled <a href='https://freemusicarchive.org/music/Wired_Magazine/The_WIRED_CD_Rip_Sample_Mash_Share
'>the tracks from The Wired CD</a> to create their own composition."</i> - <a href='https://en.wikipedia.org/wiki/The_Wired_CD'>wikipedia, The Wired CD</a>

This was hosted on the ccMixter platform, and as this was a popular contest that spawned many remixes (and remixes of remixes, and remixes of remixes of remixes...) I became curious to visualize these 16 tracks as they were remixed through time.

Since a song on ccMixter can both use Creative Commons-licensed songs as source material (as well as allow others to use that song in their own work), the site's songs naturally form a DAG (<a href='https://en.wikipedia.org/wiki/Directed_acyclic_graph'>directed acyclic graph</a>).

Each node is a track, with sampled sources forming parent nodes, and downstream songs that sample it forming children nodes.

I visualized and designed a circular DAG representation that would plot a track in the center point, the tracks that were used as sources in the top hemisphere, and tracks that remixed the center track in the lower hemisphere. Further I represented the number of 'hops' away from the current track/node as concentric circles.

Clicking on a node would play the track, and double-clicking on the node would recenter that track to be the center node in the DAG.

<i>Unfortunately I never formally published this unique song browser.</i>


<img class='fullimage' src='http://kiddphunk.com/images/projects/ccmixview/ui.png'/>

Also in 2005 <a href='http://ccmixter.org/people/kiddphunk'>I contributed</a> a remix <a href='http://ccmixter.org/files/kiddphunk/1519'>"Below"</a> that utilized six sample sources from the Magnatune library:

<img class='fullimage' src='http://kiddphunk.com/images/projects/ccmixview/ccMixter_below_750.png'/>



<p></p>
<hr>
