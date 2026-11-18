/* ==========================================================
   TRAVEL JOURNAL CONTENT
   ----------------------------------------------------------
   Every trip on beyond-the-lab.html comes from this list. To edit:

   - Story text: change the strings in `story`. Each entry is one
     paragraph. Use { h: "Heading", sub: "Small label" } for a heading.
   - Places: edit `places` (name + a short note). They appear as the
     numbered list next to the story.
   - Photos: put your images in images/travel/<trip id>/ and list them in
     `photos`, e.g. { src: "images/travel/utah-dec-2025/arches.jpg",
     caption: "Delicate Arch at sunset" }. The FIRST photo is the cover.
     While `photos` is empty, coloured placeholders are shown instead.
   - Photos inside the story: add { photos: [ {src, caption}, ... ] }
     between paragraphs (see the Utah trip for an example).
   ========================================================== */

window.TRIPS = [
  {
    id: "michigan",
    title: "Michigan: the state that became home",
    when: "2022 to today",
    region: "USA",
    flag: "",
    colors: ["#1f6f8b", "#5aa469"],
    excerpt: "My first snow, tulip fields in Holland, waterfalls and turquoise cliffs in the Upper Peninsula, autumn colours, and ski days with friends. Michigan has given me more than I ever expected.",
    places: [
      { name: "Oakland University, Rochester", note: "Where it all started in 2022." },
      { name: "Detroit", note: "Christmas lights downtown." },
      { name: "Holland", note: "Tulip Time and Lake Michigan sunsets." },
      { name: "Frankenmuth", note: "Michigan's Little Bavaria." },
      { name: "Mackinac Bridge", note: "The gateway to the Upper Peninsula." },
      { name: "Tahquamenon Falls State Park", note: "Upper and Lower Falls." },
      { name: "Pictured Rocks National Lakeshore", note: "Miners Castle and the boat cruise." },
      { name: "Mackinac Island", note: "Arch Rock, carriages and no cars." },
      { name: "Kitch-iti-kipi", note: "The crystal-clear Big Spring." },
      { name: "SkyBridge Michigan, Boyne Mountain", note: "Skiing with friends." }
    ],
    photos: [
      { src: "images/travel/michigan/pictured-rocks.jpg", caption: "Pictured Rocks on Lake Superior" }
    ],
    story: [
      "When I moved from Bangladesh to Michigan in 2022 for my PhD, I thought of it as the place where I would study. I didn't expect it to become home. Michigan has given me my first snow, my favourite road trips, lifelong friends, and a new way of seeing the seasons. It's always part of my life, so instead of one trip, this is a story of many.",
      { h: "A new beginning", sub: "Fall 2022" },
      "It started at Oakland University. Walking across campus that first October, with the leaves just starting to turn, everything was new: the people, the food, the weather, and the quiet.",
      { photos: [
        { src: "images/travel/michigan/oakland-university.jpg", caption: "Oakland University in my first fall" },
        { src: "images/travel/michigan/cranbrook.jpg", caption: "Cranbrook, Bloomfield Hills" }
      ] },
      { h: "My first winter", sub: "Winter 2022 to 2023" },
      "Then came my first real winter. I'll never forget seeing snow fall for the first time, or building a snowman like a little kid. On New Year's Eve I went to downtown Detroit, where the giant Christmas tree and the lights between the skyscrapers made the cold feel magical.",
      { photos: [
        { src: "images/travel/michigan/detroit-christmas.jpg", caption: "New Year's in downtown Detroit" },
        { src: "images/travel/michigan/first-snowman.jpg", caption: "My first Michigan Christmas" },
        { src: "images/travel/michigan/first-snow.jpg", caption: "Snow for the first time" }
      ] },
      { h: "Spring tulips and summer towns", sub: "Spring and summer 2023" },
      "In spring, Holland's Tulip Time painted the town in red, yellow and white, and the evening ended with a fiery sunset over Lake Michigan. In July I wandered through Frankenmuth, Michigan's Little Bavaria, with its riverside walks and storybook buildings.",
      { photos: [
        { src: "images/travel/michigan/holland-tulips-me.jpg", caption: "Tulip Time in Holland" },
        { src: "images/travel/michigan/holland-tulip-fields.jpg", caption: "Fields of tulips" },
        { src: "images/travel/michigan/lake-michigan-sunset.jpg", caption: "Sunset over Lake Michigan" },
        { src: "images/travel/michigan/frankenmuth.jpg", caption: "Frankenmuth" }
      ] },
      { h: "The Upper Peninsula in summer", sub: "August 2023" },
      "In August I drove north across the Mackinac Bridge into the Upper Peninsula. Tahquamenon Falls roared with root-beer-coloured water. At Pictured Rocks, the cliffs were striped in orange and green above water so clear and blue it looked like the Caribbean, and the boat cruise along the cliffs at sunset was unforgettable. On the way back I took the ferry to Mackinac Island, where there are no cars, only bicycles and horse carriages, and climbed up to Arch Rock.",
      { photos: [
        { src: "images/travel/michigan/mackinac-bridge.jpg", caption: "Crossing the Mackinac Bridge" },
        { src: "images/travel/michigan/miners-castle.jpg", caption: "Miners Castle, Pictured Rocks" },
        { src: "images/travel/michigan/pictured-rocks-cruise.jpg", caption: "Pictured Rocks boat cruise" },
        { src: "images/travel/michigan/tahquamenon-upper.jpg", caption: "Upper Tahquamenon Falls" },
        { src: "images/travel/michigan/tahquamenon-lower.jpg", caption: "Lower Tahquamenon Falls" },
        { src: "images/travel/michigan/waterfall-forest.jpg", caption: "A waterfall hidden in the forest" },
        { src: "images/travel/michigan/superior-sunset.jpg", caption: "Sunset on the lake" },
        { src: "images/travel/michigan/arch-rock.jpg", caption: "Arch Rock, Mackinac Island" },
        { src: "images/travel/michigan/mackinac-island-carriage.jpg", caption: "Horse carriages on Mackinac Island" }
      ] },
      { h: "The same roads in fall colours", sub: "Fall 2023" },
      "Everyone told me I had to see the UP in the fall, so a month later I went back. The same roads were now lined with red, orange and gold. I visited Kitch-iti-kipi, the Big Spring, where the water is so clear you can see the trout and old tree trunks deep below, and watched the morning mist lift off the water there. Going back to the same places twice taught me that a place is never really the same.",
      { photos: [
        { src: "images/travel/michigan/fall-road.jpg", caption: "Autumn roads up north" },
        { src: "images/travel/michigan/kitch-iti-kipi.jpg", caption: "Kitch-iti-kipi, the Big Spring" },
        { src: "images/travel/michigan/fall-river.jpg", caption: "Fall colours on the river" },
        { src: "images/travel/michigan/misty-river.jpg", caption: "Morning mist over the water at Kitch-iti-kipi" },
        { src: "images/travel/michigan/fall-me.jpg", caption: "Me among the fall colours" },
        { src: "images/travel/michigan/fall-highway.jpg", caption: "The drive home" }
      ] },
      { h: "Learning to ski", sub: "Winter 2023" },
      "By my second winter, snow had become something to enjoy rather than survive. In December I went skiing with friends at Boyne Mountain and walked across SkyBridge Michigan, high above the trees. I fell a lot, laughed even more, and went home happy.",
      { photos: [
        { src: "images/travel/michigan/ski-friends.jpg", caption: "Ski day with friends" },
        { src: "images/travel/michigan/skybridge.jpg", caption: "SkyBridge at Boyne Mountain, decorated for the holidays" }
      ] },
      { h: "Simple joys close to home", sub: "Summer 2026" },
      "Some of my favourite Michigan moments don't need a long drive at all. A breezy afternoon walking along the Detroit River with the skyline across the water, or a sunny September day getting lost in a sunflower field taller than me. These small, ordinary days are what make Michigan feel like home.",
      { photos: [
        { src: "images/travel/michigan/sunflowers-close.jpg", caption: "Sunflowers in September" },
        { src: "images/travel/michigan/sunflower-field.jpg", caption: "A field of sunflowers" },
        { src: "images/travel/michigan/sunflower-field-2.jpg", caption: "Endless sunflowers under a blue sky" },
        { src: "images/travel/michigan/riverwalk.jpg", caption: "A walk along the Detroit River" },
        { src: "images/travel/michigan/river-skyline.jpg", caption: "The skyline across the Detroit River" }
      ] },
      "Michigan keeps surprising me, every season. There's still so much of it left to explore."
    ]
  },
  {
    id: "bangladesh",
    title: "Bangladesh: Sylhet, Cox's Bazar & Chittagong",
    when: "2016 to Summer 2026",
    region: "Bangladesh",
    flag: "",
    colors: ["#0f6b4f", "#d9493f"],
    excerpt: "The tea gardens of Sreemangal, sunsets and sunrises on the world's longest beach at Cox's Bazar, the hills of Sajek and kayaking on Kaptai Lake. No matter how far I go, home keeps calling me back.",
    places: [
      { name: "Sreemangal, Sylhet", note: "The tea capital of Bangladesh. Summer 2026." },
      { name: "Lawachara National Park", note: "Rainforest trails in Sreemangal." },
      { name: "Sri Sri Sreemangaleshwari Kali Bari", note: "Temple in Sreemangal." },
      { name: "Kadipur Shib Bari", note: "Temple domes under monsoon skies." },
      { name: "Shree Shree Bishnupada Dham Temple", note: "A quiet temple courtyard." },
      { name: "Cox's Bazar", note: "The world's longest natural sea beach. 2016 to 2026." },
      { name: "Chittagong", note: "My first visit was back in 2016." },
      { name: "Sitakunda", note: "Hills and the coast north of Chittagong." },
      { name: "Khagrachari", note: "Green hills on the way to Sajek." },
      { name: "Sajek Valley", note: "Above the clouds in the Hill Tracts." },
      { name: "Kaptai Lake", note: "Kayaking on the lake." },
      { name: "Saint Martin's Island", note: "Bangladesh's only coral island." }
    ],
    photos: [
      { src: "images/travel/bangladesh/sylhet-tea-garden.jpg", caption: "The tea gardens of Sreemangal" }
    ],
    story: [
      "No matter how many new places I see, Bangladesh is the one I keep coming back to. These are some of the places at home that hold a special place in my heart.",
      { h: "Sylhet", sub: "Summer 2026" },
      "Sylhet has become one of my favourite places, because it's where I found my soulmate. Sylhet always feels incomplete without her. We have explored a lot of it together, and there is still so much left to explore.",
      "On my short visit home in summer 2026, we spent our days in Sreemangal, the heartbeat of Sylhet. From the rainforest trails of Lawachara to the endless green rows of the tea estates, and the temples of Sri Sri Sreemangaleshwari Kali Bari, Kadipur Shib Bari and Shree Shree Bishnupada Dham, every moment happened with her by my side.",
      { photos: [
        { src: "images/travel/bangladesh/sylhet-tea-garden-2.jpg", caption: "Tea bushes as far as the eye can see" },
        { src: "images/travel/bangladesh/lawachara-walk.jpg", caption: "Walking the trails together" },
        { src: "images/travel/bangladesh/sylhet-forest-path.jpg", caption: "A forest path in Sreemangal" },
        { src: "images/travel/bangladesh/sreemangal-hills.jpg", caption: "Green hills of Sreemangal" },
        { src: "images/travel/bangladesh/temple-together.jpg", caption: "At Sri Sri Sreemangaleshwari Kali Bari" },
        { src: "images/travel/bangladesh/mangaleshwari-temple-night.jpg", caption: "Sri Sri Sreemangaleshwari Kali Bari at night" },
        { src: "images/travel/bangladesh/temple-domes.jpg", caption: "Kadipur Shib Bari under monsoon skies" },
        { src: "images/travel/bangladesh/temple-courtyard.jpg", caption: "Shree Shree Bishnupada Dham Temple" }
      ] },
      { h: "Cox's Bazar", sub: "2016 to 2026" },
      "Cox's Bazar, on the southeast coast of Bangladesh, is home to the longest natural sea beach in the world: more than 120 kilometres of unbroken golden sand along the Bay of Bengal. Fishing boats head out at dawn, the beach stalls fry fresh fish all day, and the sun sets straight into the sea.",
      "Every time I come to the ocean, it feels different. From 2016 to 2026 I have explored Cox's Bazar with friends again and again, and every time it felt new. But this time I visited with my soulmate. Watching the quiet sea together, from sunset to sunrise, refreshed every memory I had of this place. Holding hands and walking along the water, it felt like nobody was judging us, and it felt like a new commitment for life.",
      "The ocean teaches me something about every part of life. It teaches me to stay cool and calm, and at the same time to stay focused on my work. And like the waves that always return to the shore, it reminds me to stay loyal to my soulmate.",
      { video: "images/travel/bangladesh/coxs-bazar-marine-drive.mp4", poster: "images/travel/bangladesh/coxs-bazar-marine-drive-poster.jpg", caption: "Riding along Marine Drive in Cox's Bazar, with the sea behind the trees" },
      { photos: [
        { src: "images/travel/bangladesh/coxs-bazar-evening-sea.jpg", caption: "The quiet sea at Cox's Bazar" },
        { src: "images/travel/bangladesh/coxs-bazar-waves.jpg", caption: "Waves on the world's longest beach" },
        { src: "images/travel/bangladesh/coxs-bazar-storm-clouds.jpg", caption: "Monsoon clouds over the shore" },
        { src: "images/travel/bangladesh/coxs-bazar-resort-night.jpg", caption: "Evening at our resort in Cox's Bazar" },
        { src: "images/travel/bangladesh/me-coxs-bazar.jpg", caption: "Me in Cox's Bazar" },
        { src: "images/travel/bangladesh/bay-of-bengal-boat.jpg", caption: "A wooden boat on the Bay of Bengal" }
      ] },
      { h: "Chittagong and the hills", sub: "From 2016" },
      "I first visited Chittagong back in 2016, and it opened my eyes to a completely different side of Bangladesh. I explored the hills and coast of Sitakunda, drove up through the green hills of Khagrachari, and woke up above the clouds in Sajek Valley, watching the fog fill the valleys below at sunrise. I also went kayaking on the calm blue water of Kaptai Lake, surrounded by green hills on every side.",
      { photos: [
        { src: "images/travel/bangladesh/sajek-clouds.jpg", caption: "Sajek Valley, above the clouds" },
        { src: "images/travel/bangladesh/sajek-sunrise.jpg", caption: "Sunrise over the hills of Sajek" },
        { src: "images/travel/bangladesh/sajek-green-hills.jpg", caption: "Endless green hills" },
        { src: "images/travel/bangladesh/sajek-valley.jpg", caption: "A hilltop cottage in Sajek" },
        { src: "images/travel/bangladesh/khagrachari.jpg", caption: "Khagrachari hills" },
        { src: "images/travel/bangladesh/chittagong-hills.jpg", caption: "The green hills of Chittagong" },
        { src: "images/travel/bangladesh/hill-tracts-peak.jpg", caption: "Peaks of the Hill Tracts" },
        { src: "images/travel/bangladesh/kaptai-kayaking.jpg", caption: "Kayaking on Kaptai Lake" },
        { src: "images/travel/bangladesh/sitakunda-ship.jpg", caption: "Ships on the coast near Sitakunda" },
        { src: "images/travel/bangladesh/chittagong-war-cemetery.jpg", caption: "Chittagong War Cemetery" }
      ] },
      { h: "Saint Martin's Island", sub: "Bangladesh's coral island" },
      "On a later trip I took the boat from the mainland to Saint Martin's Island, the only coral island in Bangladesh. The water around it is a shade of blue I've never seen anywhere else in the country, the shore is scattered with dark coral rocks, and as the sun goes down the whole sea turns silver. At night the sky is full of stars. It was one of the quietest, simplest days of my life.",
      { photos: [
        { src: "images/travel/bangladesh/saint-martin-sea.jpg", caption: "Coral rocks and blue water at Saint Martin" },
        { src: "images/travel/bangladesh/saint-martin-sunset.jpg", caption: "Sunset over the sea at Saint Martin" }
      ] },
      "Every visit home reminds me how much of Bangladesh I still haven't seen, and how much I want to share it with the people I love."
    ]
  },
  {
    id: "utah-dec-2025",
    title: "Canyon country: Las Vegas, Arizona & Utah",
    when: "December 2025",
    region: "USA",
    flag: "",
    colors: ["#b5532a", "#e9a15b"],
    excerpt: "Delicate Arch at sunset, a slot canyon carved by light, the Colorado River bending around Horseshoe Bend, and a sunset over the canyon rim. My second trip out west was a loop through some of the most surreal landscapes I've ever seen.",
    places: [
      { name: "Las Vegas, Nevada", note: "Start and end of the loop, plus Seven Magic Mountains." },
      { name: "Lower Antelope Canyon, Arizona", note: "Slot canyon near Page." },
      { name: "Horseshoe Bend, Arizona", note: "The Colorado River's famous bend." },
      { name: "Grand Canyon National Park, Arizona", note: "Sunset at the rim." },
      { name: "Capitol Reef National Park, Utah", note: "White domes and the Waterpocket Fold." },
      { name: "Canyonlands National Park, Utah", note: "Canyons inside canyons." },
      { name: "Arches National Park, Utah", note: "Delicate Arch, Balanced Rock, Park Avenue." }
    ],
    photos: [
      { src: "images/travel/utah-dec-2025/arches-courthouse-towers.jpg", caption: "Me among the Courthouse Towers in Arches National Park" }
    ],
    story: [
      "One year after my California trip, I flew back into Las Vegas in December 2025 with friends. The plan was simple: rent a car, skip the Strip, and chase as much red rock as we could fit into a week of short winter days.",
      { photos: [
        { src: "images/travel/utah-dec-2025/seven-magic-mountains.jpg", caption: "Seven Magic Mountains, just outside Las Vegas" },
        { src: "images/travel/utah-dec-2025/friends-cafe.jpg", caption: "Warming up with friends between long drives" }
      ] },
      { h: "Lower Antelope Canyon", sub: "Arizona" },
      "Lower Antelope Canyon was the moment I stopped trying to describe things and just stared. You climb down metal stairs into a crack in the ground, and suddenly the sandstone walls are curving around you like frozen waves. When the light hits them, the rock glows orange, pink and gold.",
      { photos: [
        { src: "images/travel/utah-dec-2025/lower-antelope-1.jpg", caption: "Light pouring into Lower Antelope Canyon" },
        { src: "images/travel/utah-dec-2025/lower-antelope-2.jpg", caption: "Sandstone shaped like frozen waves" }
      ] },
      { h: "Horseshoe Bend", sub: "Arizona" },
      "Just a few minutes from Antelope Canyon is Horseshoe Bend, where the Colorado River makes an almost perfect loop a thousand feet below the rim. I sat right at the edge for a long time, half nervous and half amazed, watching the clouds move over the canyon.",
      { photos: [
        { src: "images/travel/utah-dec-2025/horseshoe-bend.jpg", caption: "The Colorado River at Horseshoe Bend" },
        { src: "images/travel/utah-dec-2025/horseshoe-bend-me.jpg", caption: "Taking it all in from the edge" }
      ] },
      { h: "Grand Canyon", sub: "Arizona" },
      "Then came the Grand Canyon, my second visit after the year before. This time we reached the rim just as the sun was going down, wrapped in our warmest jackets. The light turned the layers of rock gold and then purple, and for a few minutes nobody said a word.",
      { photos: [
        { src: "images/travel/utah-dec-2025/canyon-sunset.jpg", caption: "Sunset at the Grand Canyon" },
        { src: "images/travel/utah-dec-2025/canyon-sunset-2.jpg", caption: "The last light of the day" }
      ] },
      { h: "Capitol Reef", sub: "Utah" },
      "Capitol Reef felt like a secret compared to the bigger parks. The white sandstone domes, the narrow canyons with a little creek running through them, and the Waterpocket Fold stretching for nearly 100 miles made it peaceful in a way I didn't expect.",
      { photos: [
        { src: "images/travel/utah-dec-2025/capitol-reef-domes.jpg", caption: "White domes in Capitol Reef" },
        { src: "images/travel/utah-dec-2025/capitol-reef-canyon.jpg", caption: "A quiet canyon and creek" },
        { src: "images/travel/utah-dec-2025/badlands.jpg", caption: "Desert badlands on the road" }
      ] },
      { h: "Canyonlands", sub: "Utah" },
      "At Canyonlands we looked down at canyons inside canyons, carved over millions of years by the Colorado and Green rivers. The scale is hard to understand. It made me feel very small, in a good way.",
      { photos: [
        { src: "images/travel/utah-dec-2025/desert-valley.jpg", caption: "Wide open desert valleys" }
      ] },
      { h: "Arches", sub: "Utah" },
      "Arches was the highlight of the whole trip. We walked along Park Avenue between giant sandstone walls, stood under Balanced Rock, and hiked up to Delicate Arch in time for sunset. We stayed until the stars came out, and seeing the arch as a dark shape against the night sky is something I'll never forget.",
      { photos: [
        { src: "images/travel/utah-dec-2025/delicate-arch-sunset.jpg", caption: "Delicate Arch at sunset" },
        { src: "images/travel/utah-dec-2025/delicate-arch-night.jpg", caption: "Delicate Arch under the stars" },
        { src: "images/travel/utah-dec-2025/balanced-rock.jpg", caption: "Balanced Rock" },
        { src: "images/travel/utah-dec-2025/arches-park-avenue.jpg", caption: "Park Avenue" },
        { src: "images/travel/utah-dec-2025/arches-courthouse.jpg", caption: "Courthouse Towers" }
      ] },
      "I've now seen a lot of the American Southwest, and I already know I'll be back."
    ]
  },
  {
    id: "southwest-dec-2024",
    title: "First trip west: California to Las Vegas",
    when: "December 2024",
    region: "USA",
    flag: "",
    colors: ["#c2582f", "#3a7ca5"],
    excerpt: "Dolphins and Hollywood on Christmas Eve, the Golden Gate Bridge on Christmas Day, the red walls of Zion, a snowy sunset over Bryce Canyon, the Grand Canyon, and the lights of the Las Vegas Strip. Six days that made me fall in love with the West.",
    places: [
      { name: "Hollywood & Santa Monica, Los Angeles", note: "Walk of Fame and the end of Route 66, December 24." },
      { name: "Golden Gate Bridge, San Francisco", note: "Christmas Day, December 25." },
      { name: "Pier 39, San Francisco", note: "Sea lions and the waterfront." },
      { name: "Zion National Park, Utah", note: "Canyon walls and the scenic drive." },
      { name: "Bryce Canyon National Park, Utah", note: "Snowy hoodoos at sunset." },
      { name: "Grand Canyon National Park, Arizona", note: "The South Rim, December 28." },
      { name: "Las Vegas Strip, Nevada", note: "A night of lights to end the trip." }
    ],
    photos: [
      { src: "images/travel/southwest-dec-2024/zion-canyon.jpg", caption: "Zion Canyon in winter light" }
    ],
    story: [
      "December 2024 was my first time in California and the desert Southwest. With a group of friends and a winter break ahead of us, we planned a loop that would take us from the Pacific coast all the way to the desert.",
      { h: "Los Angeles", sub: "December 24" },
      "We started in Southern California on Christmas Eve. The morning was grey and calm by the coast, and out on the water a pod of dolphins swam right alongside our boat, which felt like the best possible welcome. In the evening we walked the Hollywood Walk of Fame, found Michael Jackson's star, met the Grinch outside the Hard Rock Cafe, and ended the night at the Santa Monica Pier, where the sign marks the end of Route 66.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/dolphin.jpg", caption: "A dolphin swimming alongside our boat" },
        { src: "images/travel/southwest-dec-2024/beach-town-morning.jpg", caption: "A quiet coastal morning" },
        { src: "images/travel/southwest-dec-2024/walk-of-fame.jpg", caption: "Michael Jackson's star on the Walk of Fame" },
        { src: "images/travel/southwest-dec-2024/me-hollywood-grinch.jpg", caption: "Meeting the Grinch in Hollywood" },
        { src: "images/travel/southwest-dec-2024/hollywood-night.jpg", caption: "Hollywood Boulevard at night" },
        { src: "images/travel/southwest-dec-2024/santa-monica-route-66.jpg", caption: "End of Route 66, Santa Monica Pier" },
        { src: "images/travel/southwest-dec-2024/christmas-lights.jpg", caption: "Christmas Eve lights" }
      ] },
      { h: "San Francisco", sub: "December 25" },
      "Then we headed north and spent Christmas Day in San Francisco. Standing in front of the Golden Gate Bridge, a place I had only seen in movies, felt unreal. Down at Pier 39, the sea lions were lazily piled on the docks, barking at each other, and the waterfront was full of holiday lights. That night we drove across the Bay Bridge as the city glowed behind us.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/me-golden-gate.jpg", caption: "Me at the Golden Gate Bridge on Christmas Day" },
        { src: "images/travel/southwest-dec-2024/golden-gate-bridge.jpg", caption: "The Golden Gate Bridge" },
        { src: "images/travel/southwest-dec-2024/pier39-sea-lions.jpg", caption: "Sea lions at Pier 39" },
        { src: "images/travel/southwest-dec-2024/pier39.jpg", caption: "Pier 39 at Christmas" },
        { src: "images/travel/southwest-dec-2024/bay-view.jpg", caption: "Looking across the bay" },
        { src: "images/travel/southwest-dec-2024/bay-bridge-night.jpg", caption: "The Bay Bridge at night" }
      ] },
      { h: "Zion", sub: "December 26" },
      "The next day we hit the road toward Utah. Zion was our first national park, and it set the bar very high. The canyon walls rise straight up from the road, glowing red and cream in the winter light. Driving between them, I kept looking up with my mouth open.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/zion-drive.jpg", caption: "The scenic drive into Zion" },
        { src: "images/travel/southwest-dec-2024/zion-cliffs.jpg", caption: "Red cliffs and winter trees" },
        { src: "images/travel/southwest-dec-2024/friends-on-the-road.jpg", caption: "With friends on a frosty morning" }
      ] },
      { h: "Bryce Canyon", sub: "December 26" },
      "We reached Bryce Canyon just in time for sunset. Thousands of orange hoodoos stood in a giant amphitheater, dusted with snow, while the sky turned pink and gold above them. Cold, quiet and absolutely beautiful. That view is a big reason I came back to Utah a year later.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/bryce-sunset.jpg", caption: "Sunset over Bryce Canyon" }
      ] },
      { h: "Desert roads", sub: "December 27" },
      "Some of my favourite moments were simply on the road: empty highways cutting through red rock and mesas, and a desert sunset that set the whole sky on fire.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/desert-highway.jpg", caption: "Highway through the canyons" },
        { src: "images/travel/southwest-dec-2024/mesa-road.jpg", caption: "Mesas on the horizon" },
        { src: "images/travel/southwest-dec-2024/desert-sunset.jpg", caption: "Desert sunset" }
      ] },
      { h: "Grand Canyon", sub: "December 28" },
      "Then came the Grand Canyon. No photo prepares you for the size of it: layer after layer of rock stretching to the horizon, carved over millions of years. We stood at the rim for a long time, just trying to take it in.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/grand-canyon.jpg", caption: "The Grand Canyon" },
        { src: "images/travel/southwest-dec-2024/grand-canyon-2.jpg", caption: "Layers of rock at the rim" }
      ] },
      { h: "Las Vegas", sub: "December 28" },
      "We ended the trip in Las Vegas, a city of lights in the middle of the desert. Driving down the Strip late at night, past the Eiffel Tower, the Bellagio and New York-New York, was the perfect, slightly crazy finale to a week of nature.",
      { photos: [
        { src: "images/travel/southwest-dec-2024/las-vegas-strip.jpg", caption: "The Las Vegas Strip" },
        { src: "images/travel/southwest-dec-2024/las-vegas-new-york.jpg", caption: "New York-New York at night" },
        { src: "images/travel/southwest-dec-2024/las-vegas-palms.jpg", caption: "Palm trees and lights" }
      ] },
      "This trip was my first taste of the American West, and it definitely won't be my last."
    ]
  },
  {
    id: "michigan-to-colorado",
    title: "3,500 miles with no plan: Michigan to Colorado",
    when: "May 2024",
    region: "USA",
    flag: "",
    colors: ["#2f6f4e", "#6aa7c8"],
    excerpt: "A friend, a rental car and no plan. We drove 3,500 miles across Indiana, Illinois, Nebraska and Colorado, got stuck at -16 degrees in the Rockies, had our car towed, and still ended the trip laughing over hotpot in Chicago.",
    places: [
      { name: "Michigan", note: "Where we started, with no real plan." },
      { name: "Indiana", note: "The first state line." },
      { name: "Illinois", note: "Highways west, and Chicago on the way back." },
      { name: "Nebraska", note: "Endless plains and big skies." },
      { name: "Colorado Rocky Mountains", note: "Snow, canyons and a -16 degree night." },
      { name: "Glenwood Springs, Colorado", note: "A canyon town on the Colorado River." },
      { name: "Chinatown, Chicago", note: "A well-earned hotpot dinner." }
    ],
    photos: [
      { src: "images/travel/michigan-to-colorado/me-and-our-car.jpg", caption: "Me and the car that became our home" }
    ],
    story: [
      "Some trips are planned for months. This one wasn't planned at all. My friend and I decided we wanted to see the roads of America for ourselves, so we rented a car in Michigan, pointed it west, and just started driving. By the time we got back, we had covered about 3,500 miles.",
      { h: "Across the heartland", sub: "Indiana, Illinois & Nebraska" },
      "The first days took us through Indiana and Illinois, and then into Nebraska, where the land flattens out and the sky seems to take up the whole world. Hour after hour of open prairie, long straight highways, and gas station snacks. It was hypnotic, and I loved every mile of it.",
      { photos: [
        { src: "images/travel/michigan-to-colorado/nebraska-plains.jpg", caption: "Big skies over the plains" },
        { src: "images/travel/michigan-to-colorado/open-prairie.jpg", caption: "Open prairie" },
        { src: "images/travel/michigan-to-colorado/driving.jpg", caption: "Taking my turn at the wheel" }
      ] },
      { h: "Our car became our home", sub: "On the road" },
      "With no hotel bookings and no fixed route, the car became our home. We ate in it, slept in it, argued about music in it, and stopped wherever a view looked good enough. Every morning we decided the day's plan over coffee.",
      { photos: [
        { src: "images/travel/michigan-to-colorado/car-at-sunset.jpg", caption: "Our home on wheels" },
        { src: "images/travel/michigan-to-colorado/winding-road.jpg", caption: "Wherever the road goes" }
      ] },
      { h: "Into the Rockies", sub: "Colorado" },
      "Then the mountains rose up out of the plains. Colorado gave us everything at once: snowy passes, frozen trees, deep red canyons along the Colorado River around Glenwood Springs, golden hills, and lakes reflecting the sky. Some of the most beautiful roads I've ever driven.",
      { photos: [
        { src: "images/travel/michigan-to-colorado/snowy-mountain-road.jpg", caption: "Snow on the mountain roads in May" },
        { src: "images/travel/michigan-to-colorado/glenwood-canyon.jpg", caption: "Canyon walls along the highway" },
        { src: "images/travel/michigan-to-colorado/me-glenwood.jpg", caption: "Me above the Colorado River" },
        { src: "images/travel/michigan-to-colorado/glenwood-springs.jpg", caption: "Glenwood Springs" },
        { src: "images/travel/michigan-to-colorado/me-overlook.jpg", caption: "At an overlook" },
        { src: "images/travel/michigan-to-colorado/golden-hills.jpg", caption: "Golden hills" },
        { src: "images/travel/michigan-to-colorado/mountain-lake.jpg", caption: "A mountain lake" },
        { src: "images/travel/michigan-to-colorado/sunset-colorado.jpg", caption: "Sunset in Colorado" }
      ] },
      { h: "Stuck at -16 degrees", sub: "Rocky Mountains" },
      "Not everything went smoothly. High in the Rocky Mountains, the temperature dropped to -16 degrees and we got stuck. Our car had to be towed, and for a while we had no idea how the rest of the trip would go, or how we would even get home. Standing in the snow, waiting and figuring things out, was the most uncertain moment of the journey.",
      { photos: [
        { src: "images/travel/michigan-to-colorado/snowy-i70.jpg", caption: "Snow closing in" },
        { src: "images/travel/michigan-to-colorado/frozen-trees.jpg", caption: "Frozen trees in the Rockies" }
      ] },
      { h: "Hotpot in Chicago", sub: "The way home" },
      "We made it through, and on the way back we stopped in Chicago. After days of road food, a steaming hotpot in Chinatown felt like the best meal in the world.",
      { photos: [
        { src: "images/travel/michigan-to-colorado/chicago-hotpot.jpg", caption: "Hotpot in Chicago's Chinatown" },
        { src: "images/travel/michigan-to-colorado/noodle-stop.jpg", caption: "Noodles on the road" }
      ] },
      "This trip taught me to make quick decisions, to stay calm when plans fall apart, and that no matter what happens, life goes on. I'd do it all again tomorrow."
    ]
  },
  {
    id: "orlando",
    title: "Orlando: Star Wars, roller coasters and rockets",
    when: "Summer 2023",
    region: "USA",
    flag: "",
    colors: ["#2b5fa8", "#f2a541"],
    excerpt: "A conference trip to Florida turned into flying the Millennium Falcon at Disney, meeting Optimus Prime at Universal, and standing under a real Saturn V rocket at NASA's Kennedy Space Center.",
    places: [
      { name: "Disney's Hollywood Studios, Walt Disney World", note: "Star Wars: Galaxy's Edge and a night show." },
      { name: "Kennedy Space Center Visitor Complex", note: "NASA's Rocket Garden, Saturn V and shuttle exhibits." },
      { name: "Universal Studios Florida", note: "Movie worlds and rides with friends." }
    ],
    photos: [
      { src: "images/travel/orlando/nasa-globe-me.jpg", caption: "Me at the NASA globe, Kennedy Space Center" }
    ],
    story: [
      "In summer 2023 I travelled to Orlando for the IEEE/ACM CHASE conference, supported by an NSF Student Travel Award. Once my talk was done, I had a few days to see why so many people call Orlando the theme park capital of the world.",
      { h: "Disney's Hollywood Studios", sub: "June 21" },
      "My first day was at Disney's Hollywood Studios. Seeing the statue of Walt Disney and Mickey felt like walking into the cartoons I watched as a kid in Bangladesh. Then I stepped into Star Wars: Galaxy's Edge, and suddenly I was standing next to the Millennium Falcon and sitting in its cockpit. The day ended with lights and fireworks over the Chinese Theater.",
      { photos: [
        { src: "images/travel/orlando/millennium-falcon.jpg", caption: "The Millennium Falcon at Galaxy's Edge" },
        { src: "images/travel/orlando/walt-and-mickey.jpg", caption: "Walt and Mickey" },
        { src: "images/travel/orlando/galaxys-edge-me.jpg", caption: "Exploring Batuu" },
        { src: "images/travel/orlando/falcon-cockpit.jpg", caption: "In the Falcon's cockpit" },
        { src: "images/travel/orlando/hollywood-studios.jpg", caption: "Hollywood Boulevard" },
        { src: "images/travel/orlando/hollywood-studios-night.jpg", caption: "Lights and fireworks at night" }
      ] },
      { h: "NASA Kennedy Space Center", sub: "June 23" },
      "For me, the best part of the trip was NASA's Kennedy Space Center. I walked through the Rocket Garden, stood under the giant Saturn V rocket, and sat in a Space Shuttle cockpit. As a computer scientist, thinking about the engineers who made those missions possible was the most inspiring moment of the trip.",
      { photos: [
        { src: "images/travel/orlando/saturn-v.jpg", caption: "The Saturn V rocket" },
        { src: "images/travel/orlando/rocket-garden.jpg", caption: "The Rocket Garden" },
        { src: "images/travel/orlando/shuttle-cockpit.jpg", caption: "Inside a shuttle cockpit" },
        { src: "images/travel/orlando/planets-exhibit.jpg", caption: "Journey through the planets" }
      ] },
      { h: "Universal Studios", sub: "June 24" },
      "My last day was at Universal Studios with friends. Every corner is a different movie world, from the giant Universal globe to Optimus Prime standing guard outside the Transformers ride. We went from ride to ride until our legs gave up.",
      { photos: [
        { src: "images/travel/orlando/universal-friends.jpg", caption: "With friends at the Universal globe" },
        { src: "images/travel/orlando/transformers.jpg", caption: "Optimus Prime" },
        { src: "images/travel/orlando/universal-globe.jpg", caption: "Universal Studios Florida" },
        { src: "images/travel/orlando/universal-street.jpg", caption: "Palm trees and movie sets" }
      ] },
      "Orlando turned a work trip into one of my most fun travel memories."
    ]
  },
  {
    id: "american-cities",
    title: "Cities, campuses & culture: Pittsburgh, Texas, Chicago & Delaware",
    when: "2023 to 2024",
    region: "USA",
    flag: "",
    colors: ["#4a5a8c", "#c47b4a"],
    excerpt: "The Cathedral of Learning in Pittsburgh, the University of North Texas, Chicago's skyline at night, and a quiet riverfront in Delaware. Some of my favourite city memories came from trips I never planned as vacations.",
    places: [
      { name: "Wilmington, Delaware", note: "December 2023." },
      { name: "University of North Texas, Denton", note: "May 2024." },
      { name: "Cathedral of Learning, University of Pittsburgh", note: "September 2024." },
      { name: "Carnegie Mellon University", note: "September 2024." },
      { name: "Soldiers and Sailors Memorial Hall, Pittsburgh", note: "A grand memorial in Oakland, Pittsburgh." },
      { name: "Field Museum, Chicago", note: "November 2024." },
      { name: "Millennium Park, Chicago", note: "Lit up for the holidays." },
      { name: "Chinatown, Chicago", note: "Dinner under the Chinatown gate." }
    ],
    photos: [
      { src: "images/travel/american-cities/cathedral-of-learning.jpg", caption: "The Cathedral of Learning, University of Pittsburgh" }
    ],
    story: [
      "Attending a conference is not only about research. It is also a rare chance to see a new city, walk through other universities, taste the local food, and feel a culture I would never have met otherwise. Whenever my work takes me somewhere new, I try to save a little time to explore.",
      { h: "Texas", sub: "May 2024" },
      "In Texas I shared my research, and then wandered the campus of the University of North Texas in Denton, with its red-brick buildings and tall clock tower. Driving back along the wide, glowing highways at night, I finally understood what people mean when they say everything is bigger in Texas.",
      { photos: [
        { src: "images/travel/american-cities/presenting-texas.jpg", caption: "Sharing my work in Texas" },
        { src: "images/travel/american-cities/unt-clock-tower.jpg", caption: "University of North Texas" },
        { src: "images/travel/american-cities/unt-sign.jpg", caption: "On the UNT campus" },
        { src: "images/travel/american-cities/texas-night-highway.jpg", caption: "Texas highways at night" }
      ] },
      { h: "Pittsburgh", sub: "September 2024" },
      "Pittsburgh surprised me. The Cathedral of Learning at the University of Pittsburgh rises 42 storeys, and inside, its Gothic commons room feels more like a castle than a classroom. Just next door is Carnegie Mellon University, one of the homes of modern AI and robotics, which felt special to see as a computer scientist. I walked past the grand Soldiers and Sailors Memorial Hall and the Carnegie museums, shared fiery Sichuan fish in a tiny restaurant with my PI and lab mate, and ended the day watching the city lights reflect on the rivers.",
      { photos: [
        { src: "images/travel/american-cities/cathedral-of-learning-commons.jpg", caption: "Inside the Cathedral of Learning" },
        { src: "images/travel/american-cities/cmu-campus.jpg", caption: "Carnegie Mellon University" },
        { src: "images/travel/american-cities/soldiers-sailors-hall.jpg", caption: "Soldiers and Sailors Memorial Hall" },
        { src: "images/travel/american-cities/pittsburgh-church.jpg", caption: "Historic architecture in Oakland, Pittsburgh" },
        { src: "images/travel/american-cities/carnegie-museum-street.jpg", caption: "Near the Carnegie museums" },
        { src: "images/travel/american-cities/pittsburgh-rivers-night.jpg", caption: "Pittsburgh's rivers at night" },
        { src: "images/travel/american-cities/pittsburgh-sichuan-fish.jpg", caption: "Sichuan fish with my PI and lab mate" }
      ] },
      { h: "Chicago", sub: "November 2024" },
      "Chicago is only a few hours from home, but every visit feels big. I spent a day at the Field Museum, from its giant columns to the Africa exhibit inside, then watched the skyline light up at night, walked through Millennium Park glowing in red and green for the holidays, and finished with dinner under the Chinatown gate.",
      { photos: [
        { src: "images/travel/american-cities/field-museum-me.jpg", caption: "Me at the Field Museum" },
        { src: "images/travel/american-cities/chicago-skyline-night.jpg", caption: "Chicago skyline at night" },
        { src: "images/travel/american-cities/millennium-park-lights.jpg", caption: "Millennium Park in holiday lights" },
        { src: "images/travel/american-cities/chicago-chinatown-gate.jpg", caption: "Chicago's Chinatown gate" },
        { src: "images/travel/american-cities/field-museum-africa.jpg", caption: "The Africa exhibit at the Field Museum" },
        { src: "images/travel/american-cities/chicago-towers.jpg", caption: "Glass towers by day" }
      ] },
      { h: "Delaware", sub: "December 2023" },
      "In December 2023 my work took me to Wilmington, Delaware. Between busy days, I explored the riverfront and enjoyed a slower, smaller-town side of the East Coast that I still remember fondly.",
      { photos: [
        { src: "images/travel/american-cities/wilmington-dinner.jpg", caption: "Dinner in Wilmington" }
      ] },
      "Every one of these trips reminded me that the world is best understood by walking through it, one city, one campus and one meal at a time."
    ]
  },
  {
    id: "darjeeling",
    title: "Darjeeling & Kalimpong: my first trip abroad",
    when: "First trip abroad",
    region: "India",
    flag: "",
    colors: ["#2a7f62", "#7aa6c2"],
    excerpt: "The city of the Feluda stories I grew up with, and my very first trip outside Bangladesh: tea gardens on steep slopes, monasteries wrapped in prayer flags, the Teesta river, and Kanchenjunga glowing white above the clouds.",
    places: [
      { name: "Darjeeling", note: "Tea gardens, the old town and Kanchenjunga views." },
      { name: "Glenary's, Darjeeling", note: "A classic bakery and café on the Mall." },
      { name: "Kalimpong", note: "A quieter hill town above the Teesta valley." },
      { name: "Morgan House, Kalimpong", note: "A historic colonial-era mansion." },
      { name: "Teesta River", note: "The river winding through the valley." },
      { name: "Himalayan monasteries", note: "Prayer wheels and prayer flags." }
    ],
    photos: [
      { src: "images/travel/india/darjeeling-tea-garden.jpg", caption: "Tea gardens in Darjeeling" }
    ],
    story: [
      "I grew up listening to stories about Darjeeling, from its misty hills to its famous tea estates. My real fascination began when I first read Feluda, Satyajit Ray's beloved Bengali detective, whose adventure Darjeeling Jomjomaat unfolds in those very hills. Ever since, Darjeeling was the city I wanted to see with my own eyes.",
      "So when I finally travelled outside Bangladesh for the first time, there was only one place to go. Watching the green plains slowly turn into mountains as the road climbed higher and higher, it felt like stepping into the pages of the books I grew up with.",
      { h: "Darjeeling", sub: "Queen of the Hills" },
      "Darjeeling felt like stepping into another world. After the heat of the plains, the air was cool and fresh. Tea gardens covered the steep hillsides, the old town was stacked on top of the ridge, and clouds drifted right through the streets. I warmed up with tea and cake at Glenary's, a bakery that has been there for generations, and on one clear morning I finally saw Kanchenjunga, the third-highest mountain in the world, glowing white above the hills.",
      { photos: [
        { src: "images/travel/india/kanchenjunga.jpg", caption: "Kanchenjunga on a clear morning" },
        { src: "images/travel/india/darjeeling-town.jpg", caption: "Darjeeling town in the clouds" },
        { src: "images/travel/india/darjeeling-view.jpg", caption: "Light breaking over the hills" },
        { src: "images/travel/india/darjeeling-hills.jpg", caption: "Endless green hills" },
        { src: "images/travel/india/glenarys.jpg", caption: "Glenary's, a Darjeeling classic" }
      ] },
      { h: "Monasteries and prayer flags", sub: "Peace in the hills" },
      "Everywhere in the hills, colourful prayer flags fluttered in the wind, carrying prayers across the valleys. I walked along rows of golden prayer wheels at the monasteries, spinning each one, and sat for a while just listening to the quiet.",
      { photos: [
        { src: "images/travel/india/prayer-flags-pines.jpg", caption: "Prayer flags among the pines" },
        { src: "images/travel/india/prayer-wheels.jpg", caption: "Golden prayer wheels" },
        { src: "images/travel/india/monastery-flags.jpg", caption: "A monastery decked in prayer flags" },
        { src: "images/travel/india/monastery.jpg", caption: "Monastery prayer wheels" }
      ] },
      { h: "Kalimpong and beyond", sub: "The Teesta valley" },
      "From Darjeeling I went on to Kalimpong, a quieter hill town with green meadows, wide views of the Himalayas, and the ivy-covered Morgan House, a colonial-era mansion that looks straight out of an old mystery novel. The road there follows the Teesta river, winding through deep green valleys, and I explored the smaller hill towns along the way.",
      { photos: [
        { src: "images/travel/india/teesta-river.jpg", caption: "The Teesta river and the hills" },
        { src: "images/travel/india/hill-house.jpg", caption: "Morgan House, Kalimpong" },
        { src: "images/travel/india/hill-meadow.jpg", caption: "Meadows with Himalayan views" }
      ] },
      "That first trip abroad taught me how big and beautiful the world is, and it started a love of travel that has taken me much further since."
    ]
  },
  {
    id: "india",
    title: "Exploring India: wisdom, devotion and memory",
    when: "2019 to 2022",
    region: "India",
    flag: "",
    colors: ["#d97a2b", "#2a7f62"],
    excerpt: "Walking the streets of Hyderabad with my father, the City of Joy that holds our last journey together, and two of the holiest places I have ever been: Prayagraj and Gaya.",
    places: [
      { name: "Charminar, Hyderabad", note: "The heart of the old city." },
      { name: "Hussain Sagar, Hyderabad", note: "The Buddha statue on the lake." },
      { name: "Birla Mandir, Hyderabad", note: "White marble temple on the hill." },
      { name: "Kolkata", note: "The City of Joy." },
      { name: "Indian Coffee House, College Street", note: "Books, coffee and conversation." },
      { name: "Dakshineswar Kali Temple", note: "On the banks of the Hooghly." },
      { name: "Belur Math", note: "Headquarters of the Ramakrishna Mission." },
      { name: "Howrah Bridge", note: "Kolkata's iconic bridge." },
      { name: "Triveni Sangam, Prayagraj", note: "Where the Ganga, Yamuna and Saraswati meet." },
      { name: "Bodh Gaya", note: "Where the Buddha attained enlightenment." }
    ],
    photos: [
      { src: "images/travel/india/charminar-night.jpg", caption: "Charminar at night, Hyderabad" }
    ],
    story: [
      "India is so close to Bangladesh, and yet every city I visited there felt like its own world. Some of these journeys were about curiosity, some were about faith, and one of them became a memory I will carry for the rest of my life.",
      { h: "Hyderabad", sub: "Walking with my father" },
      "I explored Hyderabad with my father. Somewhere along those streets, he stopped being only my father and became my friend. We walked through the old city together, stood beneath the Charminar as it lit up at night, visited the Bhagyalakshmi temple at its base, climbed up to the white marble Birla Mandir, and watched the giant Buddha statue glow in the middle of Hussain Sagar lake. We also stopped at the famous Nimrah Café right by the Charminar.",
      { photos: [
        { src: "images/travel/india/flying-to-hyderabad.jpg", caption: "Flying into Hyderabad at sunrise" },
        { src: "images/travel/india/bhagyalakshmi-temple.jpg", caption: "Bhagyalakshmi temple at the Charminar" },
        { src: "images/travel/india/old-city-night.jpg", caption: "The old city lit up at night" },
        { src: "images/travel/india/birla-mandir.jpg", caption: "Birla Mandir" },
        { src: "images/travel/india/hussain-sagar-buddha.jpg", caption: "The Buddha statue on Hussain Sagar" },
        { src: "images/travel/india/nimrah-cafe.jpg", caption: "Nimrah Café near the Charminar" }
      ] },
      { h: "Kolkata", sub: "The City of Joy, and of memory" },
      "Last but not least, Kolkata, the City of Joy. This city will always be a special place for me, because it is the last city I explored with my father before he passed away.",
      "Kolkata is a city that reminds me of history at every turn. Its streets feel like the pages of the books I grew up with: Satyajit Ray's Feluda solving mysteries in its lanes, Sharadindu Bandyopadhyay's detective Byomkesh Bakshi, Sunil Gangopadhyay's Sei Somoy (Those Days) bringing 19th-century Calcutta to life, and Dominique Lapierre's The City of Joy, which gave the city its nickname. Sitting in the Indian Coffee House on College Street, where writers and poets have argued for generations, I felt that history all around me, and I couldn't help recalling Manna Dey's song “Coffee House-er Shei Adda”, which these days always takes me back to my old school days. The yellow taxis, the Howrah Bridge rising out of the morning fog, the temple at Dakshineswar and the peaceful grounds of Belur Math all hold a piece of my heart.",
      { photos: [
        { src: "images/travel/india/indian-coffee-house.jpg", caption: "Indian Coffee House, College Street, home of the famous adda" },
        { src: "images/travel/india/howrah-bridge-fog.jpg", caption: "Howrah Bridge in the morning fog" },
        { src: "images/travel/india/kolkata-yellow-taxi.jpg", caption: "Kolkata's yellow taxi" },
        { src: "images/travel/india/dakshineswar.jpg", caption: "Dakshineswar Kali Temple" },
        { src: "images/travel/india/belur-math.jpg", caption: "Belur Math" },
        { src: "images/travel/india/kolkata-streets.jpg", caption: "The streets of Kolkata" }
      ] },
      { h: "Prayagraj", sub: "Devotion" },
      "Prayagraj is one of the holiest places in Hindu dharma. It is home to the Triveni Sangam, where the Ganga, the Yamuna and the unseen Saraswati meet. I went there to perform rituals, and to understand how, according to Hindu dharma, human ashes return to the sacred rivers on their journey to heaven. Standing at the meeting of the waters was a deeply moving and humbling experience.",
      { h: "Gaya", sub: "Wisdom" },
      "Gaya is a holy place for millions of people. At nearby Bodh Gaya, under the Bodhi tree, the Buddha attained enlightenment more than 2,500 years ago. Sitting in that calm, surrounded by pilgrims from all over the world, I felt a kind of peace that is hard to put into words.",
      { photos: [
        { src: "images/travel/india/gaya-temple.jpg", caption: "A temple in Gaya" },
        { src: "images/travel/india/gaya-temple-2.jpg", caption: "Temple spires in Gaya" }
      ] },
      "These journeys taught me about faith, about history, and about how the people we love stay with us in the places we shared with them."
    ]
  }
];

