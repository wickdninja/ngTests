/*jshint maxlen:120 */
/*jshint -W079 */
var mockData = (function() {
    'use strict';
    return {
        //templates
        getMockTemplate: getMockTemplate,
        getMockTemplates: getMockTemplates,
        //delivery options
        getMockDeliveryOptions: getMockDeliveryOptions,

        getMockPayment: getMockPayment,
        getMockPayments: getMockPayments
    };


    function getMockTemplate() {
        return [{
            "SelectedAccount": "00000000-0000-0000-0000-000000000000",
            "Accounts": [],
            "PayToBankAccount": null,
            "GridDisplayName": "",
            "HasSchedule": false,
            "MaskedDisplayAccount": "",
            "Id": "00000000-0000-0000-0000-000000000000",
            "Name": "",
            "PayToAccount": "",
            "Schedule": {
                "Id": "00000000-0000-0000-0000-000000000000",
                "Amount": 0,
                "Frequency": 0,
                "FrequencyString": "None",
                "StartingDate": null,
                "StartingDateString": "",
                "UntilButNotAfter": null,
                "UntilButNotAfterString": "",
                "UntilTotalPayments": 0,
                "TerminateCondition": 0,
                "TerminateConditionString": "Until Cancelled",
                "NonBusinessDayOption": 0,
                "NonBusinessDayOptionString": "Previous Business Day",
                "NextPaymentDateString": ""
            },
            "IsDeliverBy": false,
            "Amount": 0,
            "PaymentDate": null,
            "DeliveryOption": null,
            "TemplateType": "BILLER",
            "ShowInQuickPay": false,
            "DisplayName": null,
            "IsElectronic": false,
            "PayToAddress": {
                "Address1": "",
                "Address2": "",
                "City": "",
                "State": "",
                "PostalCode": "",
                "Country": "",
                "FormattedInline": ""
            },
            "PayFromAddress": null,
            "UseElectronicView": false,
            "LastPaymentInfo": null,
            "NextPaymentInfo": null,
            "PayFromBankAccount": {
                "Id": "00000000-0000-0000-0000-000000000000",
                "Name": "",
                "AccountNumber": "",
                "RoutingNumber": "",
                "AccountType": 0,
                "AvailableBalance": 0,
                "IsDefault": false,
                "AccountOwnerType": 0,
                "MaskedAccountNumber": ""
            },
            "MemoField": null,
            "LastModified": "",
            "CorrectedAccountNumber": null,
            "GridSortName": "",
            "DefaultScheduledForOffset": 0,
            "DefaultScheduledForOffsetAlgo": 0,
            "CustomerId": "",
            "CustomerMessages": [],
            "PictureId": "00000000-0000-0000-0000-000000000000",
            "DuplicateOf": null,
            "PayToEmailAddress": null
        }];
    }
    function getMockTemplates(){
        return getMockTemplate().concat(getMockTemplate());
    }

    function getMockDeliveryOptions() {
        return [{
            "Fee": 1.0,
            "IsElectronic": true,
            "IsDefault": false,
            "Name": "Expedited",
            "DeliveryTimeOffset": 1,
            "DaysFromScheduleForDate": 1,
            "OptionId": "00000000-0000-0000-0000-000000000000",
            "DeliveryOption": {
                "$id": "3",
                "Id": "00000000-0000-0000-0000-000000000000",
                "AllowedNetworks": {
                    "$id": "4",
                    "$values": [
                        "00000000-0000-0000-0000-000000000000",
                        "00000000-0000-0000-0000-000000000000",
                        "00000000-0000-0000-0000-000000000000"
                    ]
                },
                "Description": "Expedited",
                "ShippingMethod": "Standard",
                "Floats": {
                    "$id": "5",
                    "ScheduledForOffset": null,
                    "CollectionDateOffset": 0,
                    "SettlementDateOffset": 0,
                    "NetworkSendDateOffset": 0
                },
                "MinimiumDeliveryTime": 0,
                "MaximiumDeliveryTime": null,
                "CutOff": null,
                "Fee": 1.0,
                "IsElectronic": true,
                "IsRealTime": false,
                "IsEnabled": true,
                "IsDefault": false,
                "CalculateMinimiumScheduleForDate": null,
                "DateCalculation": "UseFI",
                "MaximiumValidFor": null,
                "ValidFor": {
                    "$id": "6",
                    "$values": [
                        "BILLER"
                    ]
                },
                "Priority": 1,
                "MaxDaysReturned": null
            },
            "NetworkId": "00000000-0000-0000-0000-000000000000",
            "RouteId": "00000000-0000-0000-0000-000000000000",
            "DateTimeCalculationAlgorithm": "BusinessDays",
            "Priority": 1,
            "EarliestDeliveryDate": "2015-09-30T00:00:00",
            "MinimiumScheduledForDate": "2015-09-29T00:00:00",
            "MaximiumScheduledForDate": "2015-09-30T00:00:00",
            "DeliveryDates": {
                "$id": "7",
                "$values": [{
                    "$id": "8",
                    "ScheduleForDate": "2015-09-29T00:00:00",
                    "DeliveryDate": "2015-09-30T00:00:00",
                    "DayZero": "2015-09-29T00:00:00",
                    "CollectionDate": "2015-09-29T00:00:00",
                    "Description1": "Expedited",
                    "Description2": "Delivered by 9/30/2015\r\nFor a fee of $1.00"
                }, {
                    "$id": "9",
                    "ScheduleForDate": "2015-09-30T00:00:00",
                    "DeliveryDate": "2015-10-01T00:00:00",
                    "DayZero": "2015-09-30T00:00:00",
                    "CollectionDate": "2015-09-30T00:00:00",
                    "Description1": "Expedited",
                    "Description2": "Delivered by 10/1/2015\r\nFor a fee of $1.00"
                }]
            },
            "NetworkBillerId": "0000001220",
            "MatchedAccountNumber": null,
            "CutOff": null,
            "RouteName": "Test Payee Name",
            "Cost": 0.0,
            "Overrides": {
                "$id": "10",
                "AchPattern": null,
                "DoNotCollect": null,
                "DoNotSettle": null,
                "DoNotNetworkSend": null,
                "Hold": null
            }
        }, {
            "Fee": 1.0,
            "IsElectronic": true,
            "IsDefault": false,
            "Name": "Expedited",
            "DeliveryTimeOffset": 1,
            "DaysFromScheduleForDate": 1,
            "OptionId": "00000000-0000-0000-0000-000000000000",
            "DeliveryOption": {
                "$id": "3",
                "Id": "00000000-0000-0000-0000-000000000000",
                "AllowedNetworks": {
                    "$id": "4",
                    "$values": [
                        "00000000-0000-0000-0000-000000000000",
                        "00000000-0000-0000-0000-000000000000",
                        "00000000-0000-0000-0000-000000000000"
                    ]
                },
                "Description": "Expedited",
                "ShippingMethod": "Standard",
                "Floats": {
                    "$id": "5",
                    "ScheduledForOffset": null,
                    "CollectionDateOffset": 0,
                    "SettlementDateOffset": 0,
                    "NetworkSendDateOffset": 0
                },
                "MinimiumDeliveryTime": 0,
                "MaximiumDeliveryTime": null,
                "CutOff": null,
                "Fee": 1.0,
                "IsElectronic": true,
                "IsRealTime": false,
                "IsEnabled": true,
                "IsDefault": false,
                "CalculateMinimiumScheduleForDate": null,
                "DateCalculation": "UseFI",
                "MaximiumValidFor": null,
                "ValidFor": {
                    "$id": "6",
                    "$values": [
                        "BILLER"
                    ]
                },
                "Priority": 1,
                "MaxDaysReturned": null
            },
            "NetworkId": "00000000-0000-0000-0000-000000000000",
            "RouteId": "00000000-0000-0000-0000-000000000000",
            "DateTimeCalculationAlgorithm": "BusinessDays",
            "Priority": 1,
            "EarliestDeliveryDate": "2015-09-30T00:00:00",
            "MinimiumScheduledForDate": "2015-09-29T00:00:00",
            "MaximiumScheduledForDate": "2015-09-30T00:00:00",
            "DeliveryDates": {
                "$id": "7",
                "$values": [{
                    "$id": "8",
                    "ScheduleForDate": "2015-09-29T00:00:00",
                    "DeliveryDate": "2015-09-30T00:00:00",
                    "DayZero": "2015-09-29T00:00:00",
                    "CollectionDate": "2015-09-29T00:00:00",
                    "Description1": "Expedited",
                    "Description2": "Delivered by 9/30/2015\r\nFor a fee of $1.00"
                }, {
                    "$id": "9",
                    "ScheduleForDate": "2015-09-30T00:00:00",
                    "DeliveryDate": "2015-10-01T00:00:00",
                    "DayZero": "2015-09-30T00:00:00",
                    "CollectionDate": "2015-09-30T00:00:00",
                    "Description1": "Expedited",
                    "Description2": "Delivered by 10/1/2015\r\nFor a fee of $1.00"
                }]
            },
            "NetworkBillerId": "0000001220",
            "MatchedAccountNumber": null,
            "CutOff": null,
            "RouteName": "21st Century Mortgage",
            "Cost": 0.0,
            "Overrides": {
                "$id": "10",
                "AchPattern": null,
                "DoNotCollect": null,
                "DoNotSettle": null,
                "DoNotNetworkSend": null,
                "Hold": null
            }
        }];
    }

    function getMockPayment() {
        return [
            {
                "Id": "00000000-0000-0000-0000-000000000000",
                "CustomerId": "00000000-0000-0000-0000-000000000000",
                "PayToName": "TEST NO ADDRESS",
                "Status": "AlliedHold",
                "Amount": 0.01,
                "PaymentDate": "2015-12-21T05:00:00",
                "CreateOn": "2015-09-28T22:55:26",
                "IsElectronic": false,
                "IsPicturePayment": false,
                "PictureId": "00000000-0000-0000-0000-000000000000",
                "IsRecurring": true,
                "TemplateType": "BILLER",
                "CheckNumber": "5115",
                "PaymentTemplateId": "00000000-0000-0000-0000-000000000000",
                "Version": 19,
                "ShardKey": "ALLIED",
                "FinancialInstitutionId": "00000000-0000-0000-0000-000000000000",
                "PayToAccount": "*383&",
                "DisplayName": null,
                "SearchName": "TEST NO ADDRESS",
                "PayFromAccount": "12345678",
                "ExpectedDeliveryDate": "2015-12-29T05:00:00",
                "PaymentType": "PAPER",
                "HidePayment": false,
                "ConfirmationNumber": "2992592",
                "CollectionTime": "2015-12-21T21:00:00",
                "CanCancel": true,
                "Links": {
                    "$id": "4",
                    "$values": []
                }
            }
        ];
    }

    function getMockPayments() {
        return getMockPayment().concat(getMockPayment());
    }
})();
