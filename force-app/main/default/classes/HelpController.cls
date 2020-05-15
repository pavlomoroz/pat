public with sharing class HelpController {

    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, AnnualRevenue, Industry, (SELECT Name, Email, Phone, MailingCity FROM Contacts) FROM Account];
    }
}