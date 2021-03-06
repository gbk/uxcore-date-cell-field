/**
 * DateCellField Component for uxcore
 * @author AlphaGo88&lt;83268606@qq.com&gt;
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const assign = require('object-assign');
const Calendar = require('uxcore-calendar');
const React = require('react');
const CellField = require('uxcore-cell-field');


class DateCellField extends CellField {

  /* eslint-disable class-methods-use-this */
  addSpecificClass() {
    return 'kuma-date-cell-field';
  }
  /* eslint-enable class-methods-use-this */

  renderContent() {
    const me = this;
    const config = me.props.column.config;
    const propsToDelete = ['value', 'onSelect'];
    const fieldProps = {
      value: me.props.value,
      onSelect(value, formatDateString) {
        me.handleDataChange({
          text: formatDateString,
          value: value ? value.getTime() : value,
        });
      },
    };
    if (config) {
      const customProps = { ...config };
      propsToDelete.forEach((item) => {
        delete customProps[item];
      });
      assign(fieldProps, customProps);
    }
    return (
      <Calendar {...fieldProps} />
    );
  }
}

DateCellField.propTypes = assign({}, CellField.propTypes);
DateCellField.defaultProps = assign({}, CellField.defaultProps);

module.exports = DateCellField;
