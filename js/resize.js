jQuery(document).ready(function($)
{
	var stoppedTimeout = null;

	$('body').

		on('mousedown', function(e)
		{
			$('#nerd-side').addClass('clip');

			doClip(e.pageX);
			e.preventDefault();
		}).

		on('mouseup', function(e)
		{
			$('#nerd-side').removeClass('clip');

			doClip(e.pageX);
			e.preventDefault();
		}).

		on('mousemove', function(e)
		{
			doClip(e.pageX);
			e.preventDefault();
		});
});

function doClip(pageX)
{
	$('.clip').each(function()
			{
				var element = $(this);
				var xOffset = element.offset().left;
				var width = element.outerWidth();
				var height = element.outerHeight();

				var x = Math.max(0, pageX - xOffset);
				x = Math.min(x, width);

				element.css('clip', 'rect(0px, ' + x + 'px, ' + height + 'px, 0)');
			});
}
