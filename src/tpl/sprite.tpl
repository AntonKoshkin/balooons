.sprite-common
	background url({{{cssPathSvg}}}) no-repeat
	background-size {{width}}{{units}} {{height}}{{units}}

	{{#cssPathNoSvg}}
	.no-svg & 
		background url({{{cssPathNoSvg}}})
	{{/cssPathNoSvg}}

{{#sprites}}
sprite__{{fileName}}()
	@extend .sprite-common
	background-position {{x}}{{units}} {{y}}{{units}}
	width {{w}}{{units}}
	height {{h}}{{units}}

{{/sprites}}