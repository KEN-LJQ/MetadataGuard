/*
 *  Copyright 2022 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { Button, Input, Modal, Typography } from 'antd';
import { t } from 'i18next';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { Trans } from 'react-i18next';
import { LOADING_STATE } from '../../../enums/common.enum';
import { getTitleCase } from '../../../utils/EntityUtils';
import { EntityDeleteModalProp } from './EntityDeleteModal.interface';

const EntityDeleteModal = ({
  loadingState = 'initial',
  className,
  entityName,
  entityType,
  onCancel,
  onConfirm,
  bodyText,
  softDelete = false,
  visible,
}: EntityDeleteModalProp) => {
  const [name, setName] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const isNameMatching = useMemo(() => name === 'DELETE', [name]);

  const isLoadingWaiting = useMemo(
    () => loadingState === LOADING_STATE.WAITING,
    [loadingState]
  );

  return (
    <Modal
      centered
      destroyOnClose
      className={className}
      closable={false}
      data-testid="delete-confirmation-modal"
      footer={
        <div data-testid="delete-confirmation-modal-footer">
          <Button
            className="mr-2"
            data-testid="discard-button"
            disabled={isLoadingWaiting}
            type="text"
            onClick={onCancel}>
            {t('label.cancel')}
          </Button>
          <Button
            data-testid={isLoadingWaiting ? 'loading-button' : 'confirm-button'}
            disabled={!isNameMatching}
            loading={isLoadingWaiting}
            type="primary"
            onClick={onConfirm}>
            {t('label.confirm')}
          </Button>
        </div>
      }
      open={visible}
      title={
        <Typography.Text data-testid="modal-header">
          {softDelete ? (
            <span>
              {t('label.soft-delete')} <strong>{entityName}</strong>
            </span>
          ) : (
            <span>
              {t('label.delete')} <strong>{entityName}</strong>
            </span>
          )}
        </Typography.Text>
      }
      width={600}>
      <div data-testid="body-text">
        <Typography className="mb-2">
          {bodyText ||
            t('message.delete-entity-permanently', {
              entityType: getTitleCase(entityType),
            })}
        </Typography>
        <Typography className="mb-2">
          <Trans
            i18nKey="label.type-to-confirm"
            values={{ text: t('label.delete-uppercase') }}>
            <strong />
          </Trans>
        </Typography>
        <Input
          autoComplete="off"
          data-testid="confirmation-text-input"
          disabled={loadingState === LOADING_STATE.WAITING}
          name="entityName"
          placeholder={t('label.delete-uppercase')}
          type="text"
          value={name}
          onChange={handleOnChange}
        />
      </div>
    </Modal>
  );
};

export default EntityDeleteModal;
