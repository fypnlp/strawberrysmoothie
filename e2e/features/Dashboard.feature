Feature: Dashboard

	@dashboard
	Scenario: Has a market count
		Given I am on the dashboard
		Then I have '100 coins'
