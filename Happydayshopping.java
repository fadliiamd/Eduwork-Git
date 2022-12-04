import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('C:\\Users\\Thinkpad\\Downloads\\Happy Day Shopping.apk', false)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroup1'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP1'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupp2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP3'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP4'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('palabok', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP5'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('NMF', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP6'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('Tea', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP7'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('sulfur', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP8'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD2'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('magic', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP9'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD8'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('katinko', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP10'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.scrollToText('Belo', FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('APK/android.view.ViewGroupP11'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupADD6'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupBCK'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupA'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupC'), 0)

Mobile.tap(findTestObject('APK/android.view.ViewGroupY'), 0)

Mobile.closeApplication()