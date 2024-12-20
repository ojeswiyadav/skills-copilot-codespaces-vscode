function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        comtroller: 'SkillsMemberController',
        controlerAs: 'vm',
        bindToController: true,
        scope: {
            member: '-'
        }
    };
}