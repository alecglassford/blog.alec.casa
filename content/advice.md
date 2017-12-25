+++
title = "Advice"
draft = false
+++
<link href="/SimpleForm.css" rel="stylesheet" type="text/css">

Ask me for some advice pleaaaase.

<div id="form-goes-here"></div>

<script src="/SimpleForm.js"></script>
<script>
  var form = new SimpleForm({
  	target: document.querySelector('div#form-goes-here'),
  	data: {
  		prompt: 'Please ask your question here.',
  		endpoint: 'https://us-central1-blog-600a0.cloudfunctions.net/recordQuestion',
  	},
	});
</script>
