<script setup></script>

<template>
    <div class="flex flex-col gap-20 font-semibold homepage_lower xl:flex-row">
        <div class="flex flex-col gap-10 content homepage__researchContent">
            <CardTitle class="text-xl" card_title="Research Question:" card_content="How do conspiracy theories related to the COVID-19 pandemic spread on the Twitter platform, and how do they influence public opinion and discourse?" />
            <h1 class="text-2xl text-center text-white">Research hypotheses:</h1>
            <Accordion value="0">
                <AccordionPanel value="0">
                    <AccordionHeader>Research Hypotheses 1</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">There will be a higher volume of COVID-19-related misinformation posts/tweets, especially on topics prone to conspiracy theory creation on the internet [Kotseva et al. 2023].</p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                    <AccordionHeader>Research Hypotheses 2</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">A correlation will be found between significant events during the COVID-19 pandemic and fluctuations in the volume of misinformation and counter-misinformation tweets [Lanier et al. 2022].</p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionHeader>Research Hypotheses 3</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">The specific words that Twitter users use in their tweets will be related to the text classification, distinguishing between misinformation and counter-misinformation [Alsmadi et al. 2022].</p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="3">
                    <AccordionHeader>Research Hypotheses 4</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            Users who frequently post misinformation are more likely to have created their accounts shortly before they began spreading this information, suggesting that these accounts may have been created specifically for the
                            purpose of disseminating misinformation [Ferrara et al. 2020].
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
            <h1 class="text-2xl text-center text-white">Hypotheses Validation: Results and Discussion</h1>
            <Accordion value="0">
                <AccordionPanel value="0">
                    <AccordionHeader>Research Hypotheses 1 answer</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            After implementing the algorithm, we examined the new tweet count classified by their label: "misinformation", "neutral", and "counter-misinformation". The graph shows that the "misinformation" category has the highest
                            count of tweets, reaching 217,513 tweets. This indicates that a significant portion of the analyzed tweets contains content classified as misinformation. The "neutral" category reaches a tweet count of 167,128. The
                            "counter-misinformation" category has the lowest count, with a number of 80,684 tweets. This suggests that fewer tweets focus on debunking misinformation or addressing misconceptions compared to those spreading
                            misinformation.
                        </p>
                        <div class="w-full mt-10 hypImg__container">
                            <img class="mx-auto md:max-w-[800px] border rounded-lg" src="/hyp1.png" alt="hyp" />
                        </div>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                    <AccordionHeader>Research Hypotheses 2 answer</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">Time-based Data Analysis: The timeline chart illustrates the number of tweets labeled as "misinformation", "counter-misinformation", and "neutral" from early 2020 to the end of 2022.</p>
                        <div class="w-full mt-10 hypImg__container">
                            <img class="mx-auto md:max-w-[800px] border rounded-lg border rounded-lg" src="/hyp2.png" alt="hyp" />
                        </div>
                        <p class="mt-4">
                            In the timeline graph, we can see a significant rise in misinformation tweets, peaking towards mid-2021. This surge may correspond to significant global events, policy changes, or misleading advertising campaigns during
                            this period. Decline after peak: Following the peak in late 2021, there's a gradual decrease in the number of misinformation tweets, although smaller spikes continue to occur occasionally. Additionally,
                            counter-misinformation tweets show a steady increase along the timeline, starting from a lower base, indicating a growing effort to address false information. In contrast to misinformation, the volume of
                            counter-misinformation tweets remains relatively consistent without significant peaks, suggesting an ongoing effort rather than sharp increases.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionHeader>Research Hypotheses 3 answer</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            Word clouds between the two classifications. There are clear characteristic differences in content between tweets that support, oppose, and present conspiracy theories about COVID-19, which can be identified and analyzed.
                            We conducted a word cloud analysis to illustrate the most common terms used in misinformation tweets and counter-misinformation tweets.
                        </p>
                        <p class="pt-4">Results: The word cloud for misinformation includes words that spread doubt and negative feelings about vaccines and COVID-19, such as "fake", "fraud", and "ineffective".</p>
                        <div class="w-full mt-10 hypImg__container">
                            <img class="mx-auto md:max-w-[800px] border rounded-lg" src="/hyp3p1.png" alt="hyp" />
                        </div>
                        <p class="mt-4">
                            In contrast, the word cloud for counter-misinformation includes words used to debunk false claims and promote factual information, such as "work", "vaccinated", and "news". The main difference lies in the intention:
                            misinformation aims to sow distrust and fear, while counter-misinformation focuses on providing accurate and supportive content.
                        </p>
                        <div class="w-full mt-10 hypImg__container">
                            <img class="mx-auto md:max-w-[800px] border rounded-lg" src="/hyp3p2.png" alt="hyp" />
                        </div>
                        <p>The analysis of words in the cloud clearly distinguishes the language used in misinformation tweets and counter-misinformation tweets, supporting the hypothesis.</p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="3">
                    <AccordionHeader>Research Hypotheses 4 answer</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">Box Plot graph representing the time differences between Twitter user registrations according to their classification.</p>
                        <div class="w-full mt-10 hypImg__container">
                            <img class="mx-auto md:max-w-[800px] border rounded-lg" src="/hyp4.png" alt="hyp" />
                        </div>
                        <p class="mt-4">
                            We collected information on the 40 users from the 2 classifications we are examining (20 for each classification) who tweeted the highest number of tweets. We then checked when they registered on Twitter, using additional
                            data we had with user details. We then plotted the data on a Box Plot graph to show the range of user registrations on Twitter by date (represented on the Y-axis by numbers, where higher numbers mean more recent dates and
                            lower numbers mean earlier dates). In this graph, we can see a very large upper part for "misinformation" users, which may indicate that some of the users were created after the start of the COVID-19 period. After this
                            graph, we examined in detail how many users out of the 20 were created after 2020. In "misinformation", the amount was 25%, and in "counter-misinformation", the amount was 10%.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
        <!-- <div class="flex justify-center hidden xl:flex covid-logo-section">
            <img class="justify-center w-[200px] md:max-h-[300px] md:min-w-[300px]" src="/covid19.png" alt="covidIMG" />
        </div> -->
    </div>
</template>

<style>
.homepage {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vh;
}

.homepage__typed-container .typed-cursor {
    font-size: clamp(1rem, 10vw, 2rem);
    color: red;
}

.homepage__typed-container {
    display: flex;
    justify-content: center;
    text-align: center;
    justify-content: end;
}

.homepage__typed-container--secondary {
    font-size: 150px;
}

.homepage__title-container {
    display: flex;
    justify-content: end;
    font-size: xx-large;
}

.homepage__cards-container {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(1, 2fr);
    grid-auto-rows: auto;
    width: 50%;
}

.homepage__card-title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.covid-logo-section {
}
</style>
