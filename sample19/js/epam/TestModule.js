define([
    "doh/runner",
    "epam/TestableModule"
], function(
    doh,
    TestableModule
){
    doh.register("Demo tests", [
        {
            name: "Success test",
            setUp: function(){
                this.module = new TestableModule();
            },
            tearDown: function(){
                this.module = null;
            },
            runTest: function(){
                doh.assertEqual(4, this.module.getSum(2, 2));
            }
        },
        {
            name: "Performance test",
            testType: "perf",
            trialDelay: 10,
            trialDuration: 10,
            trialIterations: 10,
            setUp: function(){
                this.module = new TestableModule();
            },
            tearDown: function(){
                this.module = null;
            },
            runTest: function(){
                doh.assertEqual(4, this.module.getSum(2, 2));
            }
        },
        {
            name: "Failed test",
            setUp: function(){
                this.module = new TestableModule();
            },
            tearDown: function(){
                this.module = null;
            },
            runTest: function(){
                doh.assertEqual(5, this.module.getSum(2, 2));
            }
        }
    ]);
});