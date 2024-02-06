/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://dpajak.pages.dev" || "https://kpajak.pages.dev",
	generateRobotsTxt: true, // (optional)
	// ...other options
};
