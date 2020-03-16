package com.stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewTours {
	
	WebDriver driver; 
	
	@Given("User Opens Browser")
	public void user_Opens_Browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Uddin\\eclipse-workspace\\SundayTesting\\src\\test\\resources\\driver\\chromedriver.exe");
	     driver = new ChromeDriver(); 
	     driver.manage().window().maximize();
	    
	}

	@When("User goes to newtours website")
	public void user_goes_to_newtours_website() {
		driver.get("http://newtours.demoaut.com/");
	    
	    
	}

	@Then("NewTours website loads")
	public void newtours_website_loads() {
	    Assert.assertEquals(driver.getTitle(), "Welcome: Mercury Tours");
	    driver.close();
	    
	}
	
	@Given("User on Webpage")
	public void user_on_Webpage() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	    driver.get("http://newtours.demoaut.com/");
	    
	}

	@When("User enters username")
	public void user_enters_username() {
	    driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("selenium1994");
	    
	}

	@When("User enters password")
	public void user_enters_password() {
	    driver.findElement(By.xpath("//*[@type='password']")).sendKeys("smarttech");
	    
	}

	@When("User clicks login")
	public void user_clicks_login() {
		driver.findElement(By.xpath("//*[@value='Login']")).click();
	    
	    
	}

	@Then("User is logged in")
	public void user_is_logged_in() {
	    Assert.assertEquals(driver.getTitle(), "Find a Flight: Mercury Tours:");
	    driver.close();
	    
	}
	
	@Given("User on Webpage for negative testing")
	public void user_on_Webpage_for_negative_testing() {
	   driver = new ChromeDriver(); 
	   driver.manage().window().maximize();
	   driver.get("http://newtours.demoaut.com/");
	}

	@When("User enters invalid selenium")
	public void user_enters_invalid_selenium() {
		driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("selenium");
	    
	}

	@When("User enters invalid nonsense")
	public void user_enters_invalid_nonsense() {
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys("nonsense");
	    
	}

	@When("User clicks login for negative testing")
	public void user_clicks_login_for_negative_testing() {
		driver.findElement(By.xpath("//*[@value='Login']")).click();
	    
	}

	@Then("user is unable to login")
	public void user_is_unable_to_login() {
	   Assert.assertEquals(driver.getTitle(), "Sign-on: Mercury Tours");
	   driver.close();
	    
	}

	@When("User enters invalid java")
	public void user_enters_invalid_java() {
		driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("java");
	    
	}

	@When("User enters invalid abcde")
	public void user_enters_invalid_abcde() {
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys("abcde");
	    
	}

	@When("User enters invalid shomir")
	public void user_enters_invalid_shomir() {
		driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("shomir");
	    
	}

	@When("User enters invalid uddin")
	public void user_enters_invalid_uddin() {
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys("uddin");
	    
	}

	@When("User enters invalid eclipse")
	public void user_enters_invalid_eclipse() {
		driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("eclipse");
	    
	}

	@When("User enters invalid zyxcfe")
	public void user_enters_invalid_zyxcfe() {
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys("zyxcfe");
	    
	}
	
	@Given("User is logged in to choose one way")
	public void user_is_logged_in_to_choose_one_way() {
	    	driver = new ChromeDriver(); 
	    	driver.manage().window().maximize();
	    	driver.get("http://newtours.demoaut.com/");
	    	driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("selenium1994");
	    	driver.findElement(By.xpath("//*[@type='password']")).sendKeys("smarttech");
	    	driver.findElement(By.xpath("//*[@value='Login']")).click();
	    	
	    
	}

	@When("User Clicks One Way")
	public void user_Clicks_One_Way() {
	    driver.findElement(By.xpath("//*[@value='oneway']")).click();
	    
	}

	@Then("One Way is selected")
	public void one_Way_is_selected() {
	    Assert.assertEquals(driver.getTitle(), "Find a Flight: Mercury Tours:");
	    driver.close();
	    
	}
	
	@Given("User is logged in to choose four passengers")
	public void user_is_logged_in_to_choose_four_passengers() {
		driver = new ChromeDriver(); 
    	driver.manage().window().maximize();
    	driver.get("http://newtours.demoaut.com/");
    	driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("selenium1994");
    	driver.findElement(By.xpath("//*[@type='password']")).sendKeys("smarttech");
    	driver.findElement(By.xpath("//*[@value='Login']")).click();
	    
	}

	@When("User selects number of passengers as four")
	public void user_selects_number_of_passengers_as_four() {
		WebElement passenger = driver.findElement(By.xpath("//*[@name='passCount']")); 
	    Select passengerDropDown = new Select(passenger);
	    passengerDropDown.selectByIndex(3);
	    
	}

	@Then("four passengers is selected")
	public void four_passengers_is_selected() {
		 Assert.assertEquals(driver.getTitle(), "Find a Flight: Mercury Tours:");
		 driver.close();
	}
	
	




	


}
