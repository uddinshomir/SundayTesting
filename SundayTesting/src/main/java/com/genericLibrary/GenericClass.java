package com.genericLibrary;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class GenericClass {
	
	WebDriver driver; 

	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Uddin\\eclipse-workspace\\SundayTesting\\src\\test\\resources\\driver\\chromedriver.exe");
	    driver = new ChromeDriver(); 
	}
	
	public void maximizeBrowser() {
		driver.manage().window().maximize();
	}
	
	
	public void getUrl() {
		driver.get("http://newtours.demoaut.com/");
	}
	
	public void getLogin() {
		driver.findElement(By.xpath("//*[@name='userName']")).sendKeys("selenium1994");
		driver.findElement(By.xpath("//*[@name='password']")).sendKeys("smarttech");
		driver.findElement(By.xpath("//*[@name='login']")).click();
	}
	
	public void getOneWay() {
		driver.findElement(By.xpath("(//*[@name='tripType'])[2]")).click();
	}
	
	public void selectPassengers() {
		WebElement passengerDropDown = driver.findElement(By.xpath("//*[@name='passCount']")); 
		Select obj = new Select(passengerDropDown); 
		obj.selectByIndex(3);
	}
	
}
