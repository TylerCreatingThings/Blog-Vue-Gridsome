---
title: When your startup doesn’t workout
path: /startup-yokd-workout
date: 2022-02-12
summary: Reflecting on the journey making my startup yokd.ca.
tags: ['startup','philosophy','writing','personal']
categories: ['letters']
thumbnail: ./assets/Word-mark.png
is_archived: false
---

## How it began
I saw Mikey passing by, he was a good friend from the past. He asked me for dinner and gave me a proposition. Apparently he asked a few people before me but they turned it down. In high school Mikey was the person who introduced me to the gym and ever since I have been working out consistently. At the time we were both early into our careers, he was a personal trainer for 3 years and I was a software developer.

I don’t know why but I went with it. The idea to create software for personal trainers. To make it easier for them to operate their business. 

## So we started

 Had a few coffee chats. I started building out the software that we would need. At the time of this I was really inexperienced. It took a while plus I was working full time and had school. I’d work on weekends. Going to a local Starbucks or library. I heard about AWS cloud from a previous consulting job. I knew I needed to store data and figure out how apps communicate with a backend. So I found a blog post on creating a new thing called a “Serverless” stack. 
 
## Technical Backend Stack
 It would contain a cloud formation stack that would deploy an API Gateway and a Lambda with python code all linked to Cloudwatch, S3 for storage. Then I looked into adding an rds sql server driver and connected it to an sql server rds instance. It ended up being the perfect thing because lambda functions were pay per use. So I didn’t go over the free tier.

It took a while to do this. It was my first time and majority of work on weekends.

We decided to start building the Android app, which would use the above setup.

## Building Custom Authentication

I looked into how to do authentication, and wanted to do the right things for my users. I saw that the SHA256 algorithm could be used with a salted password to make it secure. In case someone somehow got the underlying data they wouldn’t be able to get any value from it since you can’t decrypt SHA256. The salt helps create unique passwords for each user and protects from hash table attacks since the hacker would have to recompute them all with each individual attack. It’s possible for them to do it but just makes it a more difficult target. Even if the user uses ‘password’ as there password the added salt would force people to recompute it with the salt.

## Building without Feedback

We created the first version of the Android app. A one man team without getting any positive feedback, each step you do gets incrementally harder.

There has to be a better way. Positive feedback, showing that what you’re doing adds value. It would keep it easier to keep contributing to the project.

No matter the strength of your will you can’t fight off the feeling that what you’re doing will be for nothing. I went for a long time.

## Features and Integrations Added

I added <b>Stripe</b> payment integrations, <b>Instagram, Facebook</b> integrations to make user on-boarding easier.

I had friends and family that wanted to use it but they were all using iPhones. Which sucked because we invested all this time into an Android app for what reason.

## Deciding to build a website

I was reflecting in the shower, and decided that I would go on to build a website. That way we could handle every user. For the next 3 months I went on to build it, without my business partner knowing anything. I would build everything better then I did on the Android app, it would be A LOT faster this time around. I showed him <a href="https://yokd.ca">YokD</a> and he was taken aback and really happy it seemed. He had been using AngelList to onboard interns and get them working on an iOS app. I was disinterested, I would help when needed but I’m sure from his perspective I wasn’t contributing a lot. I’m sure it built resentment, maybe I should have told him.

## Adding Features That I wanted

Now we had a website and felt more confident that anyone can use the product. I was getting excited and adding features that I would want. Like meal tracking, exercise tracking. Having a personal fitness calendar. You could post solo workouts, workouts with workout partners and ones with workout trainers. Then be able to go back and see everything you’ve done. 

I felt there was nothing like that on the market, but didn’t know if users would even want it or how I would get the message out. We then built out a feature when users consented to allow Trainers to see their diet and exercises to be able to provide unique personal advice to tweak things. Trainers seemed to like this idea.

## Adapting to COVID

When COVID happened I added virtual workout software and video streaming setting up open source WebRTC.

All this with the belief that it will work and will add value to people. It’s funny, the idea didn’t even come from me. I just knew I wanted to be an entrepreneur and would do anything for it to work.

## How we dealt with the chicken and the egg problem

We were dealing with the chicken and the egg problem. We would have no trainers on the platform to train users. We found directories of trainers and mass emailed them. Didn’t really get interest. We would go to Kijiji and message people who had posted Trainer ads, that got a few bites. We actually got a few from Kijiji when we spent 20-40 minutes interviewing them and asking them where they wanted help and where our platform could add value. Then we went on indeed. We tried making an indeed account before and it didn’t work because we didn’t have a tax ID. Then we tried again and we ended up needing to pay to get an ad posted. So being desperate and willing to try anything I paid. The ad itself didn’t work but indeed had this part of the platform where you can invite people to apply to your job posting and search up key words on their resumes. That worked and we ended up getting a good chunk of trainers to sign up. 

## More features, to try and scale
We made more and more changes to the platform, we added Trainer profiles, like LinkedIn pages a resume for them and then gave them a unique link they can use to advertise. It seemed like Trainers were only interested in using our product because they could get more clients. Since we were charging 10% per session even if we had automated payments, emails, meeting software, schedule availability planning, that 10% wasn’t worth it. They had a system that already worked before us so why would they give that up. With COVID any money that came in they were desperate for it too. So our platform ended up turning into just trying to find clients for them. They wouldn’t bring their own no matter what we did. I remember programming new massive features in a weekend, us being so excited because finally people were using it. Like we had a chance to make something.

## We had Trainers, Lets get Users

We did a <a href="https://www.kickstarter.com/projects/yokd/yokd?ref=nav_search&result=project&term=yokd">Kickstarter campaign</a>, made a video and did all the work for the page. Found and did mass emails to people with blogs to gather interest. No one bit. With that I did Facebook, Instagram, Google Ads. I experimented with all of them. The only thing that worked a little but cost a fortune was Google when you set the budget to max.

It generated an average amount of interest but the retention, the idea itself wasn’t enough. Looking at user replays people would go to the page look up and down and leave. So I redesigned the homepage thinking that they needed the least amount of clicks as possible and just put the trainers in front of them like Airbnb. They would be redirected to making an account if they wanted to book trainers. I made the user sign up as easy as possible. Noticing that other personal training sites asked SOO many sign up questions I only kept what was required. We did a little marketing but it felt like the changes didn’t make a difference, like the market was trying to tell us to get out.

From here we got stuck. This was the crux of it. We had everything just not the users. The most important part. The money flow. We would try creating an affiliate program, mass emailing psychologists but they said they couldn’t receive any kickback for legal reasons.

## Momentum being Stopped

My career at this point was getting held back I felt. Friends and family were getting ahead, my age or younger. I just started losing motivation.

After all that, it sucks. Our next plan was to target dieticians and a whole bunch of other groups that we felt could bring in people who would like and use our platform.

## Trying to convince myself again

I started looking at competition and noticed that other sites had all these different payment types. Ours would end up being cheaper personal training because it’s an open market. Trainers would have to compete on pricing. Other sites would have what seemed like static site generated Trainers and couldn’t scale like ours would.

I designed it to be a fully automated system if it worked it would’ve been amazing for everyone. Just its so difficult to get user attention these days. Maybe we stopped just when it would get good and payoff.

## Post Thoughts

I just feel the uneasiness in my bones when I think of continuing. I’ve been upset since not working on it.

### Direction

Sometimes I think life would be so much easier if someone would guide me. Not knowing which direction is the right one. Then we are all just trying to figure things out. All adults no matter what age, who’s to say anyone knows better. Especially since I want to be an entrepreneur you need to be a trailblazer.

After having such a fixed and clear direction for so long it feels weird not knowing where to go. I feel this underlying bitterness that my startup didn’t work out even though that’s the typical. You think because it’s you you’ll be different. Just keep pouring your heart and soul into it. Maybe I should work on it some more. People have told me that with the latest changes it looks good.

### Next Steps

I just feel like after so much effort being put into it, everything else is easier. I'm so used to working a lot because of it. With my career knowing that if I work on it there are fixed very likely outcomes for me to grow and get things out of it. Maybe thats my next step.

I will do the work, I know how to grind and put in the effort. Push through and find a solution when things get tough. I just need to be pushed in the "right" direction.

That’s why I’m writing this blog. To write my thoughts, to write about the experiments I do. Hopefully you get some value out of the things I try and we can both be better for it.

## Outro

I would love to hear about your experiences and thoughts. I know I’m far from perfect, no one is. So please feel free to criticize :).

This has been a letter from a coder.

Best Regards,
Tyler Farkas

