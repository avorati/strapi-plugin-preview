import { useState, useEffect, ChangeEvent } from 'react';
import { Main, Box, Flex, Typography, Button, Modal } from '@strapi/design-system';
import { useFetchClient } from '@strapi/strapi/admin';
import { Field } from '@strapi/design-system';
import { PLUGIN_ID } from '../../pluginId';

export const HomePage = () => {
  const { get, post } = useFetchClient();
  // Estado para a URL que será carregada no iframe
  const [iframeUrl, setIframeUrl] = useState('');

  // Estado para o input da URL
  const [inputUrl, setInputUrl] = useState('');

  // Busca a configuração atual (URL) do plugin
  useEffect(() => {
    get(`${PLUGIN_ID}/settings`)
      .then((response) => {
        console.log({response})
        if (response.data && response?.data?.url) {
          setIframeUrl(response?.data?.url);
          setInputUrl(response?.data?.url);
        }
      })
      .catch((error: any) => {
        console.error('Erro ao carregar configuração:', error);
        console.error('Status:', error.response?.status);
        console.error('Data:', error.response?.data);
      });
  }, []);

  const handleSave = async () => {
    try {
      await post(`/${PLUGIN_ID}/settings`, { url: inputUrl });
      setIframeUrl(inputUrl);
    } catch (error: any) {
      console.error('Erro ao salvar a configuração:', error);
      console.error('Status:', error.response?.status);
      console.error('Data:', error.response?.data);
    }
  };

  return (
    <Main>
      {/* Barra fixa superior */}
      <Flex justifyContent="space-between" padding={4} background="neutral100">
        <Typography variant="beta">
          Preview
        </Typography>
        <Modal.Root>
          <Modal.Trigger>
            <Button startIcon={<i className="fa fa-gear" />}>Configurar URL</Button>
          </Modal.Trigger>

          <Modal.Content>
            <Modal.Header>
              <Modal.Title> Configurar URL</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Field.Root name="name" required>
                <Field.Label>Name</Field.Label>
                <Field.Input
                  type="text"
                  placeholder="Digite a URL..."
                  value={inputUrl}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputUrl(e.target.value);
                  }}
                />
              </Field.Root>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close>
                <Button variant="tertiary">Cancel</Button>
              </Modal.Close>
              <Modal.Close>
                <Button onClick={handleSave}>Salvar</Button>
              </Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Root>
      </Flex>

      {/* Iframe exibindo o frontend */}
      <Box style={{ height: 'calc(100vh - 60px)', marginTop: 20 }}>
        {iframeUrl ? (
          <iframe
            src={`${iframeUrl}?status=DRAFT`}
            title="Visualizar Preview"
            style={{ width: '100%', height: '100%', border: 0 }}
            allow="autoplay; encrypted-media; fullscreen; accelerometer; gyroscope; clipboard-write; web-share"
          />
        ) : (
          <Typography>Configure a URL para exibir o conteúdo.</Typography>
        )}
      </Box>
    </Main>
  );
};