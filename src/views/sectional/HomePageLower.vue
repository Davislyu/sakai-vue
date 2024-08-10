<script setup></script>

<template>
    <div class="flex flex-col gap-20 font-semibold homepage_lower xl:flex-row">
        <div class="flex flex-col w-4/5 gap-10 content homepage__researchContent">
            <CardTitle card_title="Research Question:" card_content="How do conspiracy theories related to the COVID-19 pandemic spread on the Twitter platform, and how do they influence public opinion and discourse?" />
            <h2 class="text-2xl text-center text-white">Research hypothesis's:</h2>
            <Accordion value="0">
                <AccordionPanel value="0">
                    <AccordionHeader>Research Hypotheses 1</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">The dynamics of tweet propagation on Twitter and the frequency of tweets supporting or opposing COVID-19 and vaccine-related topics may lead to extreme social reactions.</p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                    <AccordionHeader>Research Hypotheses 2</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            The dynamics of tweet propagation on Twitter and the frequency of tweets supporting or opposing COVID-19 and vaccine-related topics may lead to extreme social reactions. Additionally, official events can trigger an
                            increase in resistance to misinformation, which may help prevent its spread.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionHeader>Research Hypotheses 3</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            The dynamics of tweet propagation on Twitter and the frequency of tweets supporting or opposing COVID-19 and vaccine-related topics may lead to extreme social reactions. Additionally, official events can trigger an
                            increase in resistance to misinformation, which may help prevent its spread.
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
