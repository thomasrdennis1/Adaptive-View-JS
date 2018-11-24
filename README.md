# adaptiveview

------------------------------------------------------------
Adaptive View

V1.0.0

Author: Tom Dennis, Jendrzyca 

Front end library that allows for adaptive view creation and management.
Utilize by adding enableAdaptive and options classes on a parent
div with two child divs, desktopView and phoneView

------------------------------------------------------------
DOCUMENTATION
------------------------------------------------------------

Base implementation Example, use class names and data attributes for setup:
	
	<div class="enableAdaptive" data-breakpoint="600px">
		<div class="desktopView">
			Content
		</div>
		<div class="phoneView">
			Content
		</div>
	</div>
 
------------------------------------------------------------

class / supporting data attributes

[enableAdaptive] [data-breakpoint="integer + px"]

sets the base breakpoint between mobile and phone for the view
chain together class names on this element for extension 

------------------------------------------------------------