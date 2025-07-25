import { useState, useEffect, ChangeEvent } from 'react';
import { Main, Box, Flex, Typography, Button, Modal } from '@strapi/design-system';
import { useFetchClient } from '@strapi/admin/strapi-admin';
import { Field } from '@strapi/design-system';

const App = () => {
  const { get, post } = useFetchClient();
  // Estado para a URL que será carregada no iframe
  const [iframeUrl, setIframeUrl] = useState('');

  // Estado para o input da URL
  const [inputUrl, setInputUrl] = useState('');

  // Busca a configuração atual (URL) do plugin
  useEffect(() => {
    get('/draft/config')
      .then((response) => {
        if (response.data && response?.data?.url) {
          setIframeUrl(response?.data?.url);
          setInputUrl(response?.data?.url);
        }
      })
      .catch(console.error);
  }, []);

  const handleSave = async () => {
    try {
      await post('/draft/config', { url: inputUrl });
      setIframeUrl(inputUrl);
    } catch (error) {
      console.error('Erro ao salvar a configuração:', error);
    }
  };

  return (
    <Main>
      {/* Barra fixa superior */}
      <Flex justifyContent="space-between" padding={4} background="neutral100">
        <Typography variant="beta">
          modo de rascunho (essas mudanças não foram publicadas)
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
            title="Visualizar Rascunho"
            style={{ width: '100%', height: '100%', border: 0 }}
          />
        ) : (
          <Typography>Configure a URL para exibir o conteúdo.</Typography>
        )}
      </Box>
    </Main>
  );
};

export { App };
