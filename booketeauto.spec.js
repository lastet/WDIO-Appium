//https://youtu.be/76twClG_63I

describe ('Booking app user story:', () => {

    it ('check In to the App', async() => {
    // skip a login 
    await $('//android.widget.ImageButton[@content-desc="Navigate up"]').click();
    await driver.pause(3000);
    });
    
    it ('pick destination', async() => {
    //com.booking:id/facet_search_box_accommodation_destination
    await driver.pause(1000);
    await $('//*[@resource-id="com.booking:id/facet_search_box_accommodation_destination"]').click();
    //com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content
    await $('//*[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]').addValue("par");
    await driver.pause(1000);
    // click on first search result 
    await $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.ImageView[2]').click();
    await driver.pause(1000);
    });

    it ('pick the dates', async() => {
   

   await $('//android.view.View[@content-desc="27 June 2022"]').click();
   await $('//android.view.View[@content-desc="01 July 2022"]').click();
   await $('//*[@resource-id="com.booking:id/facet_date_picker_confirm"]').click();
   await $('//*[@resource-id="com.booking:id/facet_search_box_cta"]').click();
   await driver.pause(5000);
});
it ('filter & pick the hotel', async() => {
//filter com.booking:id/toolbar_item_label

await $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.TextView').click();
await $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.CheckedTextView[1]').click();
await driver.pause(3000);

//scroll to and pick
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Hôtel Duo")');
await $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]').click();
await driver.pause(3000);
});

it ('review hotel #1', async() => {
//check  reviews
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("See all 511 reviews")');
await $('//*[@resource-id="com.booking:id/bui_review_score_view"]').click();
await driver.pause(2000);
//scroll thru revs    
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Mon May 23 2022")').click();
await driver.pause(2000);
await driver.back();
//scroll back to the photos
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Coronavirus (COVID-19) support")');
await driver.pause(2000);

//check photos
await $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.ImageView[1]').click();
await driver.pause(1000);
await $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.widget.ImageView').click();
await driver.pause(1000);
await $('//android.widget.ImageButton[@content-desc="Navigate up"]').click();
await $('//android.widget.ImageButton[@content-desc="Navigate up"]').click();

//save hotel
await $('//android.widget.TextView[@content-desc="Add to list"]').click();
await driver.pause(1000);
});
})
