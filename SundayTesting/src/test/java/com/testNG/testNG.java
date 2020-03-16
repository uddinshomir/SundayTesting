package com.testNG;

import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.genericLibrary.GenericClass;

public class testNG extends GenericClass {
	
	testNG test;
	
	@BeforeTest
	public void runSetup() {
		test = new testNG(); 
		test.openBrowser();
		test.maximizeBrowser();
		test.getUrl();
		
	}
	
	
	@Test
	public void getTrip() {
		test.getLogin();
		test.getOneWay();
		test.selectPassengers();
	}
	
	

	

}
