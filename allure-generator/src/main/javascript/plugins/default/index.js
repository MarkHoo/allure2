import OverviewLayout from '../../layouts/overview/OverivewLayout';

allure.api.addTab('', {
    title: 'tab.overview.name', icon: 'fa fa-home',
    route: '',
    onEnter: () => new OverviewLayout()
});
