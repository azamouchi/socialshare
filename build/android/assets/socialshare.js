function share(e){var t=null;t=Ti.Android.createIntent({action:Ti.Android.ACTION_SEND}),e.status&&t.putExtra(Ti.Android.EXTRA_TEXT,e.status),e.image?(t.type="image/*",t.putExtraUri(Ti.Android.EXTRA_STREAM,e.image)):(t.type="text/plain",t.addCategory(Ti.Android.CATEGORY_DEFAULT)),Ti.Android.currentActivity.startActivity(Ti.Android.createIntentChooser(t,e.androidDialogTitle))}exports.share=share;